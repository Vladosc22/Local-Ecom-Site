public class Linkedin {

    public void applyToJob(int varsta,boolean isStudent){
        if(varsta >= 18) {
            System.out.println("Esti eligibil sa aplici pentru acest job.");
        } else if (isStudent) {
            System.out.println("Puteti aplica doar la internship");
        } else{
                System.out.println("Nu esti eligibil sa aplici pentru acest job deoarece varsta treb sa fie >=18.");
            }

        }

    }

