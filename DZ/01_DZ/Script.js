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
        document.write("�������������: " + rectangle + "<br/>");
        document.write("����������: " + xh + ", " + yh + ", " + xb + ", " + yb + "." + "<br/>");
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

// ��� ���:

//������ "�������������"
var MyRectangle1 = {

    constructor: function Constructor  (rectangle, xh, yh, xb, yb) {
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
        document.write("�������������: " + this.rectangle + "<br/>");
        document.write("����������: " + this.xh + ", " + this.yh + ", " + this.xb + ", " + this.yb + "." + "<br/>");
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





