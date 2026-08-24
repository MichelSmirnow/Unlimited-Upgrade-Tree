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
    "C":0.5,
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
    "UNLOCK":["P15"],
    "D":1.1,
  },
  "P11": {
    "X": 700,
    "Y": 500,
    "COST": 24000,
    "CAP": 1,
    "NAME":"Арифметическая прогрессия",
    "DESC": "Добавить <span style=\"color: #06CECE\">+10P/сек</span> к основной формуле",
    "CURRENCY":"P",
    "UNLOCK":["P12","P13","P16"],
    "A":10,
  },
  "P12": {
    "X": 700,
    "Y": 650,
    "COST": 15000,
    "CAP": 5,
    "NAME":"Шаг назад",
    "DESC": "Добавить <span style=\"color: #06CECE\">+5P/сек</span> к основной формуле",
    "CURRENCY":"P",
    "UNLOCK":["P14"],
    "A":5,
  },
  "P13": {
    "X": 700,
    "Y": 350,
    "COST": 2400000,
    "CAP": 1,
    "NAME":"Шаг вперед",
    "DESC": "Умножить доход <span style=\"color: #06CECE\">x2.5Р/сек</span>",
    "CURRENCY":"P",
    "UNLOCK":[],
    "B":2.5,
  },
  "P14": {
    "X": 700,
    "Y": 800,
    "COST": 440000,
    "CAP": 10,
    "NAME":"Эмоциональные качели",
    "DESC": "Добавить <span style=\"color: #06CECE\">+7P/сек</span> к основной формуле",
    "CURRENCY":"P",
    "UNLOCK":[],
    "A":7,
  },
  "P15": {
    "X": 700,
    "Y": 200,
    "COST": 52000000,
    "CAP": 1,
    "NAME":"22 ТРИЛЛИОНА ДОЛЛАРОВ!",
    "DESC": "<span style=\"color: #06CECE\">Удвоить</span> собственный доход <span style=\"color: #06CECE\">очков</span>",
    "CURRENCY":"P",
    "UNLOCK":["P19"],
    "С":0.5,
  },
  "P16": {
    "X": 950,
    "Y": 500,
    "COST": 11700000,
    "CAP": 1,
    "NAME":"Геометрическая прогрессия",
    "DESC": "Умножить доход <span style=\"color: #06CECE\">x5Р/сек</span>",
    "CURRENCY":"P",
    "UNLOCK":["P17","P18","P21"],
    "B":5,
  },
  "P17": {
    "X": 950,
    "Y": 350,
    "COST": 25*(10**6),
    "CAP": 1,
    "NAME":"Ускоряемся!",
    "DESC": "Умножить доход <span style=\"color: #06CECE\">x3Р/сек</span>",
    "CURRENCY":"P",
    "UNLOCK":["P23"],
    "B":3,
  },
  "P18": {
    "X": 950,
    "Y": 650,
    "COST": 8*(10**7),
    "CAP": 3,
    "NAME":"Дорогое удовольствие",
    "DESC": "Добавить немаленькие <span style=\"color: #06CECE\">+20P/сек</span> к основной формуле",
    "CURRENCY":"P",
    "UNLOCK":["P20","P22"],
    "A":20,
  },
  "P19": {
    "X": 950,
    "Y": 200,
    "COST": 10**9,
    "CAP": 5,
    "NAME":"Совсем другое дело",
    "DESC": "<span style=\"color: #06CECE\">Усилить</span> коэфициент формулы собственного дохода <span style=\"color: #06CECE\">очков</span>",
    "CURRENCY":"P",
    "UNLOCK":["P24"],
    "D":1.1
  },
  "P20": {
    "X": 950,
    "Y": 800,
    "COST": 10**18,
    "CAP": 1,
    "NAME":"Новая эра",
    "DESC": "Открыть <span style=\"color: #ce0606ff\">платформу автоматизации (B/Bits)</span> (Перманентно)",
    "CURRENCY":"P",
    "UNLOCK":["B1"],
  },
  "P21": {
    "X": 1200,
    "Y": 500,
    "COST": 2*(10**9),
    "CAP": 1,
    "NAME":"Мультиобновление",
    "DESC": "Добавить <span style=\"color: #06CECE\">+45P/сек</span> к формуле и умножить доход на <span style=\"color: #06CECE\">x2Р/сек</span>",
    "CURRENCY":"P",
    "UNLOCK":["P26"],
    "A":45,
    "B":2,
  },
  "P22": {
    "X": 1200,
    "Y": 650,
    "COST": 7.5*(10**9),
    "CAP": 5,
    "NAME":"",
    "DESC": "Добавить колоссальные <span style=\"color: #06CECE\">+50P/сек</span> к основной формуле",
    "CURRENCY":"P",
    "UNLOCK":[],
    "A":20,
  },
  "P23": {
    "X": 1200,
    "Y": 350,
    "COST": 2.8*(10**8),
    "CAP": 10,
    "NAME":"Странное обновление",
    "DESC": "Смешно увеличить доход на <span style=\"color: #06CECE\">x1.2Р/сек</span>",
    "CURRENCY":"P",
    "UNLOCK":[],
    "B":1.2,
  },
  "P26": {
    "X": 1450,
    "Y": 500,
    "COST": 0,
    "CAP": 1,
    "NAME":"",
    "DESC": "",
    "CURRENCY":"P",
    "UNLOCK":["P31"],
  },
  "P31": {
    "X": 1700,
    "Y": 500,
    "COST": 15*(10**12),
    "CAP": 1,
    "NAME":"Престиж",
    "DESC": "Открыть <span style=\"color: #cec106ff\">платформу престижа (R/Rebirth)</span> (Перманентно)",
    "CURRENCY":"P",
    "UNLOCK":["Rs"],
  },/**/
};
let rendered  = {"P1":0};

/* =================================== Игровые валюты и доход =================================== */

// Список игровых валют и обработка изменения значений
const statP = document.getElementById('stat-P');
const STANDART_CURRENCY = { P:0,R:0 }
const STANDART_GAINS = {
  P: {a:0,b:1,c:0,d:1}
};
let currency = STANDART_CURRENCY;
let currencies = {
  get P() { return currency.P; },
  set P(val) { currency.P = val; statP.innerHTML = formatter.format(currency.P, NumberFormats.AD_STANDARD, 2); }
}
let gains = STANDART_GAINS;
function calculate(currence, time) {
    const result = time * (gains[currence].a * gains[currence].b * (1 + gains[currence].c*currencies[currence] ** (0.1 * gains[currence].d)));
    currencies[currence] = Math.round((currencies[currence] + result) * 100) / 100;
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
        this.currentX = 200;
        this.currentY = this.viewportHeight - this.fieldHeight - 200;
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
        const scaledPadding = this.boundaryPadding * this.scale;
        if (scaledFieldWidth < this.viewportWidth) {
            const centerX = (this.viewportWidth - scaledFieldWidth) / 2;
            this.currentX = centerX;
        } else {
            const maxX = scaledPadding;
            const minX = this.viewportWidth - scaledFieldWidth - scaledPadding;
            this.currentX = Math.max(minX, Math.min(maxX, this.currentX));
        }
        if (scaledFieldHeight < this.viewportHeight) {
            const centerY = (this.viewportHeight - scaledFieldHeight) / 2;
            this.currentY = centerY;
        } else {
            const maxY = scaledPadding;
            const minY = this.viewportHeight - scaledFieldHeight - scaledPadding;
            this.currentY = Math.max(minY, Math.min(maxY, this.currentY));
        }
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
    this.kMBd = ["", "K", "M", "B", "T", "Qd", "Qn", "Sx", "Sp", "Oc", "No", "Dc"];
    this.unitPrefixes = ["U", "D", "T", "Qd", "Qn", "Sx", "Sp", "Oc", "No"];
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

// База данных
const DBManager = (() => {
  const DB_NAME = 'AppData';
  const DB_VERSION = 1;
  const STORE_NAME = 'gameData';
  let db = null;
  let currenciesSaveTimer = null;
  let otherDataSaveTimer = null;
  
  // ✓ Инициализация базы данных
  const initDB = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        db = request.result;
        resolve(db);
      };
      request.onupgradeneeded = (event) => {
        const database = event.target.result;
        if (!database.objectStoreNames.contains(STORE_NAME)) {
          database.createObjectStore(STORE_NAME);
        }
      };
    });
  };
  
  // ✓ Аппаратное сохранение данных [data] в хранилище с ключом [key]
  const saveData = (key, data) => {
    if (!db) return Promise.reject('DB not initialized');
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(JSON.parse(JSON.stringify(data)), key);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  };
  
  // ✓ Аппаратная выгрузка данных из хранилища с ключом [key]
  const loadData = (key) => {
    if (!db) return Promise.reject('DB not initialized');
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(key);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result);
    });
  };
  
  // ✓ Автосохранение currencies
  const startCurrenciesSave = () => {
    currenciesSaveTimer = setInterval(() => {
      saveData('currency', currency);
    }, 1000);
  };
  
  // ✓ Автосохранение купленных кнопок и доходов
  const startOthersSave = () => {
    otherDataSaveTimer = setInterval(() => {
      saveData('gains', gains);
      saveData('rendered', rendered);
    }, 60000);
  };

  // ✓ Ручное сохранение купленных кнопок и доходов
  const manualSave = async () => {
    await saveData('gains', gains);
    await saveData('rendered', rendered);
  };

  // ✓ Загрузка данных пользовательского сохранения
  const loadAllData = async () => {
    try {
      const loadedCurrency = await loadData('currency');
      const loadedGains = await loadData('gains');
      const loadedRendered = await loadData('rendered');
      if (!loadedCurrency) { currencies = STANDART_CURRENCY;
      } else { 
        Object.keys(currency).forEach(key => delete gains[key]);
        Object.assign(currency, loadedCurrency);
      }
      if (!loadedGains) { gains = STANDART_GAINS;
      } else {
        Object.keys(gains).forEach(key => delete gains[key]);
        Object.assign(gains, loadedGains);
      }
      if (!loadedRendered) { rendered = {"P1":0};
      } else {
        Object.keys(rendered).forEach(key => delete rendered[key]);
        Object.assign(rendered, loadedRendered);
      }
      return { loadedCurrency, loadedGains, loadedRendered };
    } catch (error) {
      console.error('Error loading data from IndexedDB:', error);
    }
  };
  
  // ✓ Инициализация
  const init = async () => {
    try {
      await initDB();
      await loadAllData();
      for (const [key, bought] of Object.entries(rendered)) { renderButton(key, bought); }
      startCurrenciesSave(); startOthersSave();
    } catch (error) {
      console.error('DBManager initialization failed:', error);
    }
  };
  


  const cleanup = () => {
    if (currenciesSaveTimer) clearInterval(currenciesSaveTimer);
    if (otherDataSaveTimer) clearTimeout(otherDataSaveTimer);
  };
  
  const clearAllData = async () => {
    if (!db) return Promise.reject('DB not initialized');
    
    return new Promise((resolve, reject) => {
      const transaction = db.transaction([STORE_NAME], 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.clear();
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        console.log('All data cleared from IndexedDB');
        resolve();
      };
    });
  };
  
  const resetGameData = async () => {
    try {
      // Очищаем IndexedDB
      await clearAllData();
      
      // Сбрасываем объекты в памяти
      currencies._P = 0;
      currencies.P = 0; // Срабатывает setter для обновления UI
      
      Object.keys(gains).forEach(key => delete gains[key]);
      gains.P = { a: 0, b: 1, c: 0, d: 1 };
      
      Object.keys(rendered).forEach(key => delete rendered[key]);
      rendered.P1 = 0;
      
      console.log('Game data reset successfully');
      return true;
    } catch (error) {
      console.error('Error resetting game data:', error);
      return false;
    }
  };
  

  return {
    init,
    cleanup,
    saveData,
    loadData,
    manualSave,
    clearAllData,
    resetGameData
  };
})();

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

/* =================================== Внутриигровые процессоры =================================== */

// ✓ Автоматический рендер кнопок и добавление обработчиков нажатий
const fieldContainer = document.getElementById('field-container');
function renderButton(key, bought) {
  const value = buttonData[key];
  if (!bought) bought = rendered[key];
  const newButton = document.createElement('button');
  newButton.classList.add('buy-button');
  newButton.classList.add(`${key.substring(0,1)}-button`);
  newButton.setAttribute('style',`left: ${value.X}px; bottom: ${value.Y}px;`);
  if (bought >= value.CAP) {newButton.classList.add('bought');}
  if (bought > 0) {(value.UNLOCK).forEach((item) => { renderStick(item); });}

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

  function renderStick(item) {
    const isUp = (value.Y < buttonData[item].Y) && (value.X === buttonData[item].X);
    const isDown = (value.Y > buttonData[item].Y) && (value.X === buttonData[item].X);
    const isRight = (value.X < buttonData[item].X) && (value.Y === buttonData[item].Y);
    const isLeft = (value.X > buttonData[item].X) && (value.Y === buttonData[item].Y);
    let stickX = 0;
    let stickY = 0;
    let stickWidth = 0;
    let stickHeight = 0;
    if (isUp) {
      stickX = value.X + 90;
      stickY = value.Y + 50;
      stickWidth = 20;
      stickHeight = (buttonData[item].Y + 50) - stickY;
    } else if (isDown) {
      stickX = buttonData[item].X + 90;
      stickY = buttonData[item].Y + 50;
      stickWidth = 20;
      stickHeight = (value.Y + 50) - stickY;
    } else if (isRight) {
      stickX = value.X + 100;
      stickY = value.Y + 40;
      stickWidth = (buttonData[item].X + 100) - stickX;
      stickHeight = 20;
    } else if (isLeft) {
      stickX = buttonData[item].X + 100;
      stickY = buttonData[item].Y + 40;
      stickWidth = (value.X + 100) - stickX;
      stickHeight = 20;
    }
    const buttonStick = document.createElement('div');
    buttonStick.classList.add('buttonStick');
    buttonStick.setAttribute('style', `left: ${stickX}px; bottom: ${stickY}px; width: ${stickWidth}px; height: ${stickHeight}px;`);
    fieldContainer.appendChild(buttonStick);
  }

  renderInnerButton();
  newButton.addEventListener('click', async() => {
    if (currencies[value.CURRENCY] >= value.COST && bought < value.CAP) {
      currencies[value.CURRENCY] -= value.COST;
      rendered[key] += 1; bought = rendered[key];
      increase(value.CURRENCY, value.A, value.B, value.C, value.D);
      if (bought >= value.CAP) newButton.classList.add('bought');
      renderInnerButton();
      const isAnyIn = (value.UNLOCK).some(a => (Object.keys(rendered)).includes(a));
      if (!isAnyIn) {(value.UNLOCK).forEach((item) => { 
        rendered[item] = 0; renderStick(item); renderButton(item); 
      });}
      DBManager.manualSave();
    } else if (bought >= value.CAP) {
        notification(
            'Уже куплено',
            `Максимальный уровень обновления (${value.CAP}) для кнопки ${key} уже приобретен`,
            3000, '#1c8ad3ff', undefined, 'assets/bought.png', undefined
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
    DBManager.init();
    while(true) {
        calculate('P', 0.1);
        await delay(100); 
    }
});

// Очистка при выходе
window.addEventListener('beforeunload', () => { DBManager.cleanup(); });