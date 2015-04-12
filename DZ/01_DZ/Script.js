/**
 1.	������� ������ �������� ��������������  � ������������ ��� �����.
 �������-�����������, ������� ��������� ������� ���� � ������� ������ �� �����.
 */

//������ "�������������"
function MyRectangle (rectangle, xh, yh, xb, yb)
{
    //��������
    this.rectangle = rectangle;
    this.xh = xh;
    this.yh = yh;
    this.xb = xb;
    this.yb = yb;

    //������
    this.GetData = GetData;
    this.Show = Show;

    //�����������
   function GetData ()
    {
        rectangle = prompt("������� �������� (�������������) ��������������.", "");
        xh = prompt( "������� ���������� � �������� ������ ����.", "");
        yh = prompt( "������� ���������� Y �������� ������ ����.", "");
        xb = prompt( "������� ���������� � ������� ������� ����.", "");
        yb = prompt( "������� ���������� Y ������� ������� ����.", "");
    }

    function Show ()
    {
        document.write("�������������: " + rectangle + "<br>");
        document.write("����������: " + xh + ", " + yh + ", " + xb + ", " + yb + "." + "<br>");
    }
}

function Run()
{
    //������ � �����������
    var rect1 = new MyRectangle ("1-� �������������", 10, 20, 30, 40);
    rect1.Show();


    //������ ��� ����������
    var rect2 = new MyRectangle();
    rect2.GetData();
    rect2.Show();

    //������ �������� �������������
    var mas = new Array(rect1, rect2);

    mas[0].Show();

}

// ��� ��� (������� 2):

//������ "�������������"
var MyRectangle1 = {

    constructor: function (rectangle, xh, yh, xb, yb) {
        //��������
        this.rectangle = rectangle;
        this.xh = xh;
        this.yh = yh;
        this.xb = xb;
        this.yb = yb;

        return this;
    },

    //������

    GetData: function ()
    {
        this.rectangle = prompt("������� �������� (�������������) ��������������.", "");
        this.xh = prompt( "������� ���������� � �������� ������ ����.", "");
        this.yh = prompt( "������� ���������� Y �������� ������ ����.", "");
        this.xb = prompt( "������� ���������� � ������� ������� ����.", "");
        this.yb = prompt( "������� ���������� Y ������� ������� ����.", "");
    },

    Show: function ()
    {
        document.write("�������������: " + this.rectangle + "<br>");
        document.write("����������: " + this.xh + ", " + this.yh + ", " + this.xb + ", " + this.yb + "." + "<br>");
    }
};

function Run1()
{
    //������ � �����������
    var rect1 = Object.create(MyRectangle1).constructor("1-� �������������", 10, 20, 30, 40);
    rect1.Show();

    //������ ��� ����������
    var rect2 = new Object(MyRectangle1);
    rect2.GetData();
    rect2.Show();

    //������ �������� �������������
    var mas = new Array(rect1, rect2);
    mas[0].Show();

}

// ��� ��� (������� 3):
function Run2()
{
    var MyRectangle3 = new Array();

    function Constructor()
    {
        var rectangle = prompt("������� �������� (�������������) ��������������.", "");
        var xh = prompt( "������� ���������� � �������� ������ ����.", "");
        var yh = prompt( "������� ���������� Y �������� ������ ����.", "");
        var xb = prompt( "������� ���������� � ������� ������� ����.", "");
        var yb = prompt( "������� ���������� Y ������� ������� ����.", "");

        MyRectangle3 [rectangle] = new Array (xh, yh, xb, yb);
    }

    function Show(key) {
        var res = false;
        if (key == -1) {
            for (var i in MyRectangle3)
                 document.write('�������������: "' + i + ':" ' + MyRectangle3[i] + "<br>");
            res = true;
        }
        else
            for (var i in MyRectangle3)
                if (i == key) {
                    document.write('�������������: "' + i + ':" ' + MyRectangle3[i] + "<br>");
                    res = true;
                }
        if (!res)
            document.write ("������������� � ����� ��������� �� ������" + "<br>");
    }

    Constructor();
    Constructor();

    var key = prompt ("������� �������� ��������������, ��� -1 ����� �������� ��� ��������������", "");
    Show (key);
}

//��� ��� (������� 4)

function Run3()
{
    var MyRectangle4 = new Array ();

    function Create() {
        var rectangle = prompt("������� �������� (�������������) ��������������.", "");
        var xh = prompt("������� ���������� � �������� ������ ����.", "");
        var yh = prompt("������� ���������� Y �������� ������ ����.", "");
        var xb = prompt("������� ���������� � ������� ������� ����.", "");
        var yb = prompt("������� ���������� Y ������� ������� ����.", "");

        MyRectangle4[rectangle] = {X1: xh , Y1: yh, X2: xb, Y2: yb};
    }

    function Show(key) {
        var res = false;
        if (key == -1) {
            for (var i in MyRectangle4) {
                document.write('�������������: "' + i + '"' + "<br>");
                for (var j in MyRectangle4[i])
                    document.write (j + " = " + MyRectangle4[i][j] + "<br>");
            }
            res = true;
        }
        else
            for (var i in MyRectangle4){
                if (i == key) {
                    document.write('�������������: "' + i + '"' + "<br>");
                    for (var j in MyRectangle4[i])
                        document.write (j + " = " + MyRectangle4[i][j] + "<br>");
                    res = true;
                }
            }
        if (!res)
            document.write("������������� � ����� ��������� �� ������" + "<br>");
    }
    Create();
    Create();

    var key = prompt ("������� �������� ��������������, ��� -1 ����� �������� ��� ��������������", "");
    Show (key);
 }



