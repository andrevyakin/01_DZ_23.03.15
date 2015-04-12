/**
 1.	Создать массив объектов «прямоугольник»  к координатами его углов.
 Функцию-конструктор, функцию изменения каждого угла и функцию вывода на экран.
 */

//Объект "Прямоугольник"
function MyRectangle (rectangle, xh, yh, xb, yb)
{
    //свойства
    this.rectangle = rectangle;
    this.xh = xh;
    this.yh = yh;
    this.xb = xb;
    this.yb = yb;

    //методы
    this.GetData = GetData;
    this.Show = Show;

    //конструктор
   function GetData ()
    {
        rectangle = prompt("Введите название (идентификатор) прямоугольника.", "");
        xh = prompt( "Введите координаты Х верхнего левого угла.", "");
        yh = prompt( "Введите координаты Y верхнего левого угла.", "");
        xb = prompt( "Введите координаты Х нижнего правого угла.", "");
        yb = prompt( "Введите координаты Y нижнего правого угла.", "");
    }

    function Show ()
    {
        document.write("Прямоугольник: " + rectangle + "<br>");
        document.write("Координаты: " + xh + ", " + yh + ", " + xb + ", " + yb + "." + "<br>");
    }
}

function Run()
{
    //объект с параметрами
    var rect1 = new MyRectangle ("1-й прямоугольник", 10, 20, 30, 40);
    rect1.Show();


    //объект без параметров
    var rect2 = new MyRectangle();
    rect2.GetData();
    rect2.Show();

    //Массив объектов прямоугольник
    var mas = new Array(rect1, rect2);

    mas[0].Show();

}

// или так (Вариант 2):

//Объект "Прямоугольник"
var MyRectangle1 = {

    constructor: function (rectangle, xh, yh, xb, yb) {
        //свойства
        this.rectangle = rectangle;
        this.xh = xh;
        this.yh = yh;
        this.xb = xb;
        this.yb = yb;

        return this;
    },

    //методы

    GetData: function ()
    {
        this.rectangle = prompt("Введите название (идентификатор) прямоугольника.", "");
        this.xh = prompt( "Введите координаты Х верхнего левого угла.", "");
        this.yh = prompt( "Введите координаты Y верхнего левого угла.", "");
        this.xb = prompt( "Введите координаты Х нижнего правого угла.", "");
        this.yb = prompt( "Введите координаты Y нижнего правого угла.", "");
    },

    Show: function ()
    {
        document.write("Прямоугольник: " + this.rectangle + "<br>");
        document.write("Координаты: " + this.xh + ", " + this.yh + ", " + this.xb + ", " + this.yb + "." + "<br>");
    }
};

function Run1()
{
    //объект с параметрами
    var rect1 = Object.create(MyRectangle1).constructor("1-й прямоугольник", 10, 20, 30, 40);
    rect1.Show();

    //Объект без параметров
    var rect2 = new Object(MyRectangle1);
    rect2.GetData();
    rect2.Show();

    //Массив объектов прямоугольник
    var mas = new Array(rect1, rect2);
    mas[0].Show();

}

// или так (Вариант 3):
function Run2()
{
    var MyRectangle3 = new Array();

    function Constructor()
    {
        var rectangle = prompt("Введите название (идентификатор) прямоугольника.", "");
        var xh = prompt( "Введите координаты Х верхнего левого угла.", "");
        var yh = prompt( "Введите координаты Y верхнего левого угла.", "");
        var xb = prompt( "Введите координаты Х нижнего правого угла.", "");
        var yb = prompt( "Введите координаты Y нижнего правого угла.", "");

        MyRectangle3 [rectangle] = new Array (xh, yh, xb, yb);
    }

    function Show(key) {
        var res = false;
        if (key == -1) {
            for (var i in MyRectangle3)
                 document.write('Прямоугольник: "' + i + ':" ' + MyRectangle3[i] + "<br>");
            res = true;
        }
        else
            for (var i in MyRectangle3)
                if (i == key) {
                    document.write('Прямоугольник: "' + i + ':" ' + MyRectangle3[i] + "<br>");
                    res = true;
                }
        if (!res)
            document.write ("Прямоугольник с таким названием не найден" + "<br>");
    }

    Constructor();
    Constructor();

    var key = prompt ("Введите название прямоугольника, или -1 чтобы показать все прямоугольники", "");
    Show (key);
}

//или так (Вариант 4)

function Run3()
{
    var MyRectangle4 = new Array ();

    function Create() {
        var rectangle = prompt("Введите название (идентификатор) прямоугольника.", "");
        var xh = prompt("Введите координаты Х верхнего левого угла.", "");
        var yh = prompt("Введите координаты Y верхнего левого угла.", "");
        var xb = prompt("Введите координаты Х нижнего правого угла.", "");
        var yb = prompt("Введите координаты Y нижнего правого угла.", "");

        MyRectangle4[rectangle] = {X1: xh , Y1: yh, X2: xb, Y2: yb};
    }

    function Show(key) {
        var res = false;
        if (key == -1) {
            for (var i in MyRectangle4) {
                document.write('Прямоугольник: "' + i + '"' + "<br>");
                for (var j in MyRectangle4[i])
                    document.write (j + " = " + MyRectangle4[i][j] + "<br>");
            }
            res = true;
        }
        else
            for (var i in MyRectangle4){
                if (i == key) {
                    document.write('Прямоугольник: "' + i + '"' + "<br>");
                    for (var j in MyRectangle4[i])
                        document.write (j + " = " + MyRectangle4[i][j] + "<br>");
                    res = true;
                }
            }
        if (!res)
            document.write("Прямоугольник с таким названием не найден" + "<br>");
    }
    Create();
    Create();

    var key = prompt ("Введите название прямоугольника, или -1 чтобы показать все прямоугольники", "");
    Show (key);
 }



