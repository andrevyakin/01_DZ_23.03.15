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
        document.write("Прямоугольник: " + rectangle + "<br/>");
        document.write("Координаты: ", xh + ", " + yh + ", " + xb + ", " + yb + "." + "<br/>")
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



