/* =================================== Игровые данные =================================== */

// Данные кнопок дерева обновлений
const buttonData = {
  "P1": {
    "X": 200,
    "Y": 200,
    "COST": 0,
    "CAP": 1,
    "NAME":"Начало",
    "DESC": "Начните получать <span style=\"color: #06CECE\">1Р/сек</span>",
    "CURRENCY":"P",
    "UNLOCK":["P2"],
    "A":1,
  },
  "P2": {
    "X": 200,
    "Y": 350,
    "COST": 10,
    "CAP": 5,
    "NAME":"Малый бизнес",
    "DESC": "Увеличить доход <span style=\"color: #06CECE\">+1Р/сек</span>",
    "CURRENCY":"P",
    "UNLOCK":["P3"],
    "A":1,
  },
  "P3": {
    "X": 200,
    "Y": 500,
    "COST": 30,
    "CAP": 1,
    "NAME":"Приумножение",
    "DESC": "Приумножить доход <span style=\"color: #06CECE\">x2Р/сек</span>",
    "CURRENCY":"P",
    "UNLOCK":["P4","P5"],
    "B":2,
  },
  "P4": {
    "X": 450,
    "Y": 500,
    "COST": 125,
    "CAP": 3,
    "NAME":"Математический прогресс",
    "DESC": "Добавить <span style=\"color: #06CECE\">+3P/сек</span> к основной формуле",
    "CURRENCY":"P",
    "UNLOCK":["P7","P8","P11"],
    "A":3,
  },
  "P5": {
    "X": 200,
    "Y": 650,
    "COST": 512,
    "CAP": 1,
    "NAME":"Много денег не бывает!",
    "DESC": "Приумножить доход  <span style=\"color: #06CECE\">x3Р/сек</span>",
    "CURRENCY":"P",
    "UNLOCK":["P6"],
    "B":3,
  },
  "P6": {
    "X": 200,
    "Y": 800,
    "COST": 40000,
    "CAP": 1,
    "NAME":"Много денег бывает...",
    "DESC": "Умножить доход на сумасшедшие <span style=\"color: #06CECE\">x10Р/сек</span>",
    "CURRENCY":"P",
    "UNLOCK":[],
    "B":10
  },
  "P7": {
    "X": 450,
    "Y": 650,
    "COST": 1000,
    "CAP": 1,
    "NAME":"И это все?",
    "DESC": "Приумножить доход на смешные <span style=\"color: #06CECE\">x1.5Р/сек</span>",
    "CURRENCY":"P",
    "UNLOCK":["P9"],
    "B":1.5,
  },
  "P8": {
    "X": 450,
    "Y": 350,
    "COST": 8100,
    "CAP": 1,
    "NAME":"22 миллиона долларов!",
    "DESC": "Количество <span style=\"color: #06CECE\">очков</span> стимулирует собственный доход",
    "CURRENCY":"P",
    "UNLOCK":["P10"],
    "C":1,
  },
  "P9": {
    "X": 450,
    "Y": 800,
    "COST": 2048,
    "CAP": 1,
    "NAME":"Нет, это не все",
    "DESC": "Приумножить доход на несмешные <span style=\"color: #06CECE\">x6Р/сек</span>",
    "CURRENCY":"P",
    "UNLOCK":[],
    "B":6,
  },
  "P10": {
    "X": 450,
    "Y": 200,
    "COST": 120000,
    "CAP": 1,
    "NAME":"22 миллиарда долларов!",
    "DESC": "Улучшить формулу стимулирования дохода <span style=\"color: #06CECE\">очков</span>",
    "CURRENCY":"P",
    "UNLOCK":[],
    "D":2,
  },
  "P11": {
    "X": 700,
    "Y": 500,
    "COST": 24000,
    "CAP": 1,
    "NAME":"",
    "DESC": "Добавить <span style=\"color: #06CECE\">+10P/сек</span> к основной формуле",
    "CURRENCY":"P",
    "UNLOCK":[],
    "A":10,
  },
};
let rendered = {"P1":0};

/* =================================== Объекты и процессы =================================== */

// ✓ Объект перемещаемого и масштабируемого поля
class FieldController {
    constructor() {
        this.field = document.getElementById('field');
        this.isDragging = false;
        this.startX = 0;
        this.startY = 0;
        this.currentX = 0;
        this.currentY = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.dragThreshold = 5;
        this.isMoving = false;
        this.scale = 1;
        this.minScale = 0.5;
        this.maxScale = 3;
        this.scaleStep = 0.1;
        this.lastDistance = 0;
        this.lastTouchX = 0;
        this.lastTouchY = 0;
        this.viewportWidth = window.innerWidth;
        this.viewportHeight = window.innerHeight;
        this.fieldWidth = 0;
        this.fieldHeight = 0;
        this.boundaryPadding = 500;
        this.init();
        this.updateFieldDimensions();
        this.initializeCameraPosition();
        window.addEventListener('resize', () => this.onWindowResize());
    }

    init() {
        this.field.addEventListener('mousedown', (e) => this.onPointerDown(e));
        document.addEventListener('mousemove', (e) => this.onPointerMove(e));
        document.addEventListener('mouseup', (e) => this.onPointerUp(e));
        this.field.addEventListener('touchstart', (e) => this.onTouchStart(e), false);
        document.addEventListener('touchmove', (e) => this.onTouchMove(e), false);
        document.addEventListener('touchend', (e) => this.onTouchEnd(e), false);
        document.addEventListener('wheel', (e) => this.onMouseWheel(e), { passive: false });
    }

    updateFieldDimensions() {
        this.fieldWidth = 10000;
        this.fieldHeight = 5000;
    }

    initializeCameraPosition() {
        this.currentX = 0;
        this.currentY = this.viewportHeight - this.fieldHeight;
        this.offsetX = this.currentX;
        this.offsetY = this.currentY;
        this.updateFieldTransform();
    }

    onWindowResize() {
        const newViewportWidth = window.innerWidth;
        const newViewportHeight = window.innerHeight;
        const scaleX = newViewportWidth / this.viewportWidth;
        const scaleY = newViewportHeight / this.viewportHeight;
        this.currentX *= scaleX;
        this.currentY *= scaleY;
        this.offsetX *= scaleX;
        this.offsetY *= scaleY;
        this.viewportWidth = newViewportWidth;
        this.viewportHeight = newViewportHeight;
        this.updateFieldDimensions();
        this.constrainPosition();
        this.updateFieldTransform();
    }

    getPointerPos(e) {
        if (e.touches) return { x: e.touches[0].clientX, y: e.touches[0].clientY };
        return { x: e.clientX, y: e.clientY };
    }

    onPointerDown(e) {
        if (e.target.classList.contains('field-button') || 
            e.target.closest('.ui-overlay') ||
            e.button !== 0) {
            return;
        }
        this.isDragging = true;
        const pos = this.getPointerPos(e);
        this.startX = pos.x;
        this.startY = pos.y;
        this.isMoving = false;
    }

    onTouchStart(e) {
        if (e.target.classList.contains('field-button') || 
            e.target.closest('.ui-overlay')) {
            return;
        }
        if (e.touches.length === 1) {
            this.isDragging = true;
            this.startX = e.touches[0].clientX;
            this.startY = e.touches[0].clientY;
            this.isMoving = false;
        } else if (e.touches.length === 2) {
            this.isDragging = false;
            this.lastDistance = this.getTouchDistance(e.touches[0], e.touches[1]);
            this.lastTouchX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
            this.lastTouchY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        }
    }

    onTouchMove(e) {
        if (e.touches.length === 1 && this.isDragging) {
            const deltaX = e.touches[0].clientX - this.startX;
            const deltaY = e.touches[0].clientY - this.startY;
            if (!this.isMoving) {
                if (Math.abs(deltaX) > this.dragThreshold || Math.abs(deltaY) > this.dragThreshold) {
                    this.isMoving = true;
                    this.field.classList.add('dragging');
                } else {
                    return;
                }
            }
            this.currentX = this.offsetX + deltaX;
            this.currentY = this.offsetY + deltaY;
            this.constrainPosition();
            this.updateFieldTransform();
        } else if (e.touches.length === 2) {
            const distance = this.getTouchDistance(e.touches[0], e.touches[1]);
            const centerX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
            const centerY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
            if (this.lastDistance > 0) {
                const scaleFactor = distance / this.lastDistance;
                this.applyZoom(scaleFactor, centerX, centerY);
            }
            this.lastDistance = distance;
            this.lastTouchX = centerX;
            this.lastTouchY = centerY;
        }
    }

    onTouchEnd(e) {
        if (this.isDragging) {
            this.isDragging = false;
            this.field.classList.remove('dragging');
            if (this.isMoving) {
                this.offsetX = this.currentX;
                this.offsetY = this.currentY;
            }
            this.isMoving = false;
        }
        if (e.touches.length < 2) {
            this.lastDistance = 0;
        }
    }

    getTouchDistance(touch1, touch2) {
        const dx = touch1.clientX - touch2.clientX;
        const dy = touch1.clientY - touch2.clientY;
        return Math.sqrt(dx * dx + dy * dy);
    }

    onPointerMove(e) {
        if (!this.isDragging) return;
        const pos = this.getPointerPos(e);
        const deltaX = pos.x - this.startX;
        const deltaY = pos.y - this.startY;
        if (!this.isMoving) {
            if (Math.abs(deltaX) > this.dragThreshold || Math.abs(deltaY) > this.dragThreshold) {
                this.isMoving = true;
                this.field.classList.add('dragging');
            } else {
                return;
            }
        }
        this.currentX = this.offsetX + deltaX;
        this.currentY = this.offsetY + deltaY;
        this.constrainPosition();
        this.updateFieldTransform();
    }

    onPointerUp(e) {
        if (this.isDragging) {
            this.isDragging = false;
            this.field.classList.remove('dragging');
            if (this.isMoving) {
                this.offsetX = this.currentX;
                this.offsetY = this.currentY;
            }
            this.isMoving = false;
        }
    }

    onMouseWheel(e) {
        e.preventDefault();
        const delta = e.deltaY > 0 ? -1 : 1;
        const scaleFactor = 1 + (delta * this.scaleStep);
        this.applyZoom(scaleFactor, e.clientX, e.clientY);
    }

    applyZoom(scaleFactor, centerX, centerY) {
        const newScale = Math.max(this.minScale, Math.min(this.maxScale, this.scale * scaleFactor));
        if (newScale === this.scale) return;
        const scaleChange = newScale / this.scale;
        const offsetFromCenter = {
            x: centerX - this.currentX,
            y: centerY - this.currentY
        };
        this.currentX = centerX - offsetFromCenter.x * scaleChange;
        this.currentY = centerY - offsetFromCenter.y * scaleChange;
        this.scale = newScale;
        this.constrainPosition();
        this.offsetX = this.currentX;
        this.offsetY = this.currentY;
        this.updateFieldTransform();
        this.updateZoomDisplay();
    }

    constrainPosition() {
        const scaledFieldWidth = this.fieldWidth * this.scale;
        const scaledFieldHeight = this.fieldHeight * this.scale;
        const maxX = this.boundaryPadding;
        const minX = this.viewportWidth - scaledFieldWidth - this.boundaryPadding;
        const maxY = this.boundaryPadding;
        const minY = this.viewportHeight - scaledFieldHeight - this.boundaryPadding;
        this.currentX = Math.max(minX, Math.min(maxX, this.currentX));
        this.currentY = Math.max(minY, Math.min(maxY, this.currentY));
    }

    updateFieldTransform() {
        this.field.style.transform = `translate(${this.currentX}px, ${this.currentY}px) scale(${this.scale})`;
    }

    zoomIn() {
        const scaleFactor = 1 + this.scaleStep;
        this.applyZoom(scaleFactor, this.viewportWidth / 2, this.viewportHeight / 2);
    }

    zoomOut() {
        const scaleFactor = 1 - this.scaleStep;
        this.applyZoom(scaleFactor, this.viewportWidth / 2, this.viewportHeight / 2);
    }

    updateZoomDisplay() {
        const zoomDisplay = document.querySelector('.zoom-display');
        if (zoomDisplay) { zoomDisplay.textContent = Math.round(this.scale * 100) + '%'; }
    }
}

// ✓ Объект строкового форматирования форматора числа
const NumberFormats = {
  AD_STANDARD: "ad-standard",
  FIXED_DECIMAL: "fixed-decimal",
  COMMA_SEPARATED: "comma-separated",
  SCIENTIFIC_NOTATION: "scientific-notation",
};
class NumberFormatter {
  constructor() {
    this.kMBd = ["", "K", "M", "B", "T", "Qa", "Qt", "Sx", "Sp", "Oc", "No", "Dc"];
    this.unitPrefixes = ["U", "D", "T", "Qa", "Qn", "Sx", "Sp", "O", "N"];
    this.tensPrefixes = ["Dc", "Vg", "Tg", "Qd", "Qn", "Se", "St", "Og", "Nn"];
    this.hundredsPrefixes = ["Ce", "Dn", "Tc", "Qe", "Qu", "Sc", "Si", "Oe", "Ne"];
    this.tier2Illions = ["MI", "MC", "NA", "PC", "FM", "AT", "ZP"];
    this.tier2Cutoff = 3003 * this.tier2Illions.length;
  }

  format(number, format = NumberFormats.AD_STANDARD, decimalPlaces = 2) {
    if (!this._isValidInput(number)) return "Invalid Input";
    decimalPlaces = Math.max(0, Math.min(100, decimalPlaces));
    const num = Number(number);
    switch (format) {
      case NumberFormats.AD_STANDARD:
        return this._formatADStandard(num, decimalPlaces);
      case NumberFormats.COMMA_SEPARATED:
        return this._formatCommaSeparated(num, decimalPlaces);
      case NumberFormats.SCIENTIFIC_NOTATION:
        return this._formatScientificNotation(num, decimalPlaces);
      case NumberFormats.FIXED_DECIMAL:
        return this._formatFixedDecimal(num, decimalPlaces);
      default:
        return num.toFixed(decimalPlaces);
    }
  }

  _isValidInput(number) {
    if (typeof number === "bigint") return true;
    if (typeof number === "number" && !isNaN(number) && isFinite(number)) return true;
    return false;
  }

  _toFixedTrimmed(number, decimalPlaces) {
    const formatted = number.toFixed(decimalPlaces);
    return decimalPlaces > 0 ? formatted.replace(/\.?0+$/, "") : formatted;
  }

  _formatADStandard(number, decimalPlaces) {
    if (number === 0) return "0";
    const absNumber = Math.abs(number);
    const logValue = Math.log10(absNumber);
    if (logValue > this.tier2Cutoff) return `Il(${number})`;
    if (absNumber < 1000) return this._toFixedTrimmed(number, decimalPlaces);
    const tier = Math.max(0, Math.floor(logValue / 3));
    if (tier <= 11) {
      const scaledNumber = number / Math.pow(10, tier * 3);
      return this._toFixedTrimmed(scaledNumber, decimalPlaces) + this.kMBd[tier];
    }
    return this._formatIllions(number, decimalPlaces, tier);
  }

  _formatIllions(number, decimalPlaces, tier) {
    const illionNumber = Math.floor(Math.log10(Math.abs(number)) / 3) - 1;
    let illionString = "";
    if (illionNumber <= 999) { illionString = this._buildIllionString(illionNumber);
    } else {
      illionString = this._buildTier2IllionString(illionNumber);
      if (illionString === null) return `Il(${number})`;
    }
    const scaledNumber = number / Math.pow(10, Math.floor(Math.log10(Math.abs(number)) / 3) * 3);
    return this._toFixedTrimmed(scaledNumber, decimalPlaces) + " " + illionString;
  }

  _buildIllionString(illionNumber) {
    const hundreds = Math.floor(illionNumber / 100);
    const tens = Math.floor((illionNumber % 100) / 10);
    const units = illionNumber % 10;
    return (
      (hundreds > 0 ? this.hundredsPrefixes[hundreds - 1] : "") +
      (units > 0 ? this.unitPrefixes[units - 1] : "") +
      (tens > 0 ? this.tensPrefixes[tens - 1] : "")
    );
  }

  _buildTier2IllionString(illionNumber) {
    const tier2Index = Math.floor(illionNumber / 1000);
    const tier2Remainder = illionNumber % 1000;
    if (tier2Index > this.tier2Illions.length) return null;
    let illionString = this.tier2Illions[tier2Index - 1];
    if (tier2Remainder > 0) {
      const remainderString = this._buildIllionString(tier2Remainder);
      illionString = remainderString + "-" + illionString;
    }
    return illionString;
  }

  _formatCommaSeparated(number, decimalPlaces) {
    return number.toFixed(decimalPlaces).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  _formatScientificNotation(number, decimalPlaces) {
    return number.toExponential(decimalPlaces);
  }

  _formatFixedDecimal(number, decimalPlaces) {
    return number.toFixed(decimalPlaces);
  }
}
const formatter = new NumberFormatter();

/* =================================== Уведомления и система =================================== */

// ✓ Функция отображения уведомления
let notifications_count = 0;
let notifications_current = 0;
const notification_container = document.getElementById('notifications');
function notification(
  header = 'Призрачное уведомление',
  text = 'Это призрачное уведомление. При его создании не было передано описание, поэтому оно было заменено на стандартный текст',
  duration = 3000,
  color = '#DCDCDC',
  textColor = '#111',
  image = '',
  background = ''
) {
  notifications_count += 1;
  notifications_current += 1;
  const notification_child = document.createElement('div');
  notification_child.setAttribute("class", "tablet-container notification-container notification-hidden");
  notification_child.setAttribute("id", `notification-${notifications_current}`);
  notification_child.setAttribute("style", `background-color: ${color} !important;`);
  notification_child.innerHTML = `
    <img src="${background}" class="tablet-banner"/>
    <div class="tablet-subcontainer notification-subcontainer"><div class="relative-container">
      <img class="tablet-image" src="${image}"/>
      <div class="tablet-subvertical">
        <label class="notification-header" style="color: ${textColor};">${header}</label>
        <p class="notification-text" style="color: ${textColor};">${text}</p>
      </div>
    </div></div>
  `;
  notification_container.appendChild(notification_child);

  requestAnimationFrame(() => {
    const contentHeight = notification_child.scrollHeight;
    setTimeout(() => {
      notification_child.classList.remove('notification-hidden');
      notification_child.classList.add('notification-appearing');
      notification_child.style.setProperty('--content-height', `${contentHeight}px`);
    }, 25);
    setTimeout(() => {
      notification_child.classList.remove('notification-appearing');
      notification_child.classList.add('notification-visible');
    }, 550);
  });

  setTimeout(() => {
    notification_child.classList.remove('notification-visible');
    notification_child.classList.add('notification-hiding');
    setTimeout(() => {
      if (notification_container.contains(notification_child)) {
        notification_container.removeChild(notification_child);
      }
      notifications_count -= 1;
    }, 550);
  }, Number(duration));
}

/* =================================== Игровые валюты и доход =================================== */

// Список игровых валют и обработка изменения значений
const statP = document.getElementById('stat-P');
let currencies = {
  _P:0,
  get P() { return this._P; },
  set P(val) { this._P = val; statP.innerHTML = formatter.format(this._P, NumberFormats.AD_STANDARD, 2); }
}

// Расчет дохода
let gains = {
    P: {a:0,b:1,c:0,d:1}
}
function calculate(currency, time) {
    const result = time * (gains[currency].a * gains[currency].b * (1 + gains[currency].c*currencies[currency] ** (0.1 * gains[currency].d)));
    currencies[currency] = Math.round((currencies[currency] + result) * 100) / 100;
}
function increase(currency, a, b, c, d) {
    if (!a) a = 0;
    if (!b) b = 1;
    if (!c) c = 0;
    if (!d) d = 1;
    gains[currency].a += a;
    gains[currency].b *= b;
    gains[currency].c += c;
    gains[currency].d *= d;
}

/* =================================== Внутриигровые процессоры =================================== */

// Автоматический рендер кнопок и добавление обработчиков нажатий
const fieldContainer = document.getElementById('field-container');
for (const [key, bought] of Object.entries(rendered)) { renderButton(key, bought); }
function renderButton(key, bought) {
  const value = buttonData[key];
  if (!bought) bought = rendered[key];
  const newButton = document.createElement('button');
  newButton.classList.add('buy-button');
  newButton.classList.add(`${key.substring(0,1)}-button`);
  newButton.setAttribute('style',`left: ${value.X}px; bottom: ${value.Y}px;`);

  function renderInnerButton() {
    const num = (bought >= value.CAP) ? `Приобретено (${value.CAP}/${value.CAP})` : `${bought}/${value.CAP}`;
    newButton.innerHTML = `
    <div class="button-container">
      <div class="button-id-container"><p class="button-id">${key} | ${value.NAME}</p></div>
      <div class="button-subcontainer"><p class="button-description">${value.DESC}</p></div>
      <div class="button-num-container"><p class="button-num">${num}</p></div>
      <div class="button-cost-container"><p class="button-cost">${formatter.format((value.COST), NumberFormats.AD_STANDARD, 2)}${value.CURRENCY}</p></div>
    </div>`;
  }

  renderInnerButton();
  newButton.addEventListener('click', () => {
    if (currencies[value.CURRENCY] >= value.COST && bought < value.CAP) {
      currencies[value.CURRENCY] -= value.COST;
      rendered[key] += 1; bought = rendered[key];
      increase(value.CURRENCY, value.A, value.B, value.C, value.D);
      if (bought >= value.CAP) newButton.classList.add('bought');
      renderInnerButton();
      const isAnyIn = (value.UNLOCK).some(a => (Object.keys(rendered)).includes(a));
      if (!isAnyIn) {(value.UNLOCK).forEach((item) => { rendered[item] = 0; renderButton(item); });}
    } else if (bought >= value.CAP) {
        notification(
            'Уже куплено',
            `Максимальный уровень обновления (${value.CAP}) для кнопки ${key} уже приобретен`,
            3000, '#1c8ad3ff', undefined, '', undefined
        );
    } else if (currencies[value.CURRENCY] < value.COST)  {
        notification(
            'Недостаточно средств',
            `Для покупки обновления кнопки ${key} Вам не хватает ${formatter.format((value.COST - currencies[value.CURRENCY]), NumberFormats.AD_STANDARD, 2)}${value.CURRENCY}`,
            4000, '#e2a217ff', undefined, 'assets/wallet.png', undefined
        );
    }
  });
  fieldContainer.appendChild(newButton);
}

/* =================================== Инициализация =================================== */

// Инициализация при загрузке документа
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
document.addEventListener('DOMContentLoaded', async() => { 
    new FieldController();
    while(true) {
        calculate('P', 0.1);
        await delay(100); 
    }
});