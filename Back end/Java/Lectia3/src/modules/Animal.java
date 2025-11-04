package modules;

public class Animal {
    String name;
    String color;
    Float viteza;
    Float greutate;
    int nrPicioare;

    public Animal(){
    }
    public Animal(String name, String color){
        this.name=name;
        this.color=color;
    }
    public String getName() {
        return name;
    }
    public void setName(String name){
        this.name=name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public Float getViteza() {
        return viteza;
    }

    public void setViteza(Float viteza) {
        this.viteza = viteza;
    }

    public Float getGreutate() {
        return greutate;
    }

    public void setGreutate(Float greutate) {
        this.greutate = greutate;
    }

    public Integer getNrPicioare() {
        return nrPicioare;
    }

    public void setNrPicioare(Integer nrPicioare) {
        this.nrPicioare = nrPicioare;
    }
}
