package models;

public class ClasaExterna {
    private String fieldExtern;
    ClasaInterna2 clasaInterna;

    public class ClasaInterna{
        String  fieldIntern;

        public static void display(){
            System.out.println("Outer field :" + fieldExtern);
            System.out.println("Inner field :" + fieldIntern);
        }
    }
    public static  ClasaInterna createInner(){
        ClasaInterna clasaInterna = new ClasaInterna();

        clasaInterna.display();
        return clasaInterna;
    }
}
