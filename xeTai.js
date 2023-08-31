

// cong ty a có 2 kiểu xe bus: xe đg dài, xe đg ngắn 
// xe đg ngắn tính tiền vé: tiền trạm * 12k
//xe đg dài: số km nhân *20k
//xe đg dài: so km di đc
//xe đg ngan co so tram đi đc
//xe: quản lý so xe, tai xe lai, hang xe,ngay bao tri gan nhat, phương thuc tinh so ngay con lại can bao tri

class car{
    constructor(numberBus,driver,brand,dateMannual){
        this.brand = brand,
        this.driver = driver,
        this.dateMannual = dateMannual,
        this.numberBus = numberBus
    }

    countLeftDayToManual(){
        return this.dateMannual * 6
    }
}

class carLong extends car{
    constructor(numberBus,driver,brand,dateMannual,kmCount){
        super(numberBus,driver,brand,dateMannual),
        this.kmCount = kmCount
    }

    totalPay(){
        return this.kmCount * 20
    }

    countLeftDayToManual(){
        return super.countLeftDayToManual() 
    }
}

class carShort extends car{
    constructor(numberBus,driver,brand,dateMannual,stationCount){
        super(numberBus,driver,brand,dateMannual),
        this.stationCount = stationCount
    }

    totalPay(){
        return this.stationCount * 12
    }

    countLeftDayToManual(){
        return super.countLeftDayToManual() 
    }
}

const long = new carLong("123a","nguyen chib","toyota",20,225)
console.log(long.countLeftDayToManual())
const short = new carShort("324a","chib2","lamboghini",12,2)
console.log(short.countLeftDayToManual())