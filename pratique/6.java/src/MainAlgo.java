import java.util.Arrays;
import java.util.Scanner;

public class MainAlgo {


    public static void main(String[] args) {
        afficheMenu();

    }



    private static void afficheMenu() {
        boolean quitter = false;
        do {
            Scanner scanner = new Scanner(System.in);
            System.out.println("\n\nVeuillez choisir un nombre :");
            System.out.println("\n\n0 - Quitter");
            System.out.println("99 - Exercice test avec Aurore");
            System.out.println("1 - Exercice 1");
            System.out.println("2 - Exercice 2");
            System.out.println("3 - Exercice 3");
            System.out.println("5 - Exercice 5");
            System.out.println("6 - Exercice 6");
            System.out.println("7 - Exercice 7");
            System.out.println("8 - Exercice 8");
            System.out.println("9 - Exercice 9");
            System.out.println("10 - Exercice 10");
            System.out.println("11 - Exercice 11");
            System.out.println("12 - Exercice 12");
            System.out.println("13 - Exercice 13 - Jeu de la vie");
            System.out.println("14 - Exercice 2 Tableaux");
            System.out.println("15 - Exercice 3 Tableaux");
            System.out.println("16 - Exercice 6 Tableaux");
            String choice = scanner.nextLine();

            switch (choice) {
                case "0": {
                    quitter = true;
                    break;
                }
                case "99": {
                    exerciceTest();
                    break;
                }
                case "1": {
                    exercice1(scanner);
                    break;
                }
                case "2": {
                    exercice2(scanner);
                    break;
                }
                case "3": {
                    exercice3(scanner);
                    break;
                }
                case "5": {
                    exercice5(scanner);
                    break;
                }
                case "6": {
                    exercice6(scanner);
                    break;
                }
                case "7": {
                    exercice7(scanner);
                    break;
                }
                case "8": {
                    exercice8(scanner);
                    break;
                }
                case "9": {
                    exercice9(scanner);
                    break;
                }
                case "10": {
                    exercice10(scanner);
                    break;
                }
                case "11": {
                    exercice11(scanner);
                    break;
                }
                case "12": {
                    exercice12(scanner);
                    break;
                }
                case "13": {
                    exercice13(scanner);
                    break;
                }
                case "14": {
                    exercice14(scanner);
                    break;
                }
                case "15": {
                    exercice15(scanner);
                    break;
                }
                case "16": {
                    exercice16(scanner);
                    break;
                }
            }
        } while (quitter = false);
    }

    public static void exerciceTest() {
        int[] monTableau = {0,0,0,0,0,0,0};
        for (int i = 0 ; i < monTableau.length ; i++) {
            System.out.println(monTableau[i]);
        }

        int[] monTableau2 = new int[7]; // pour déclarer un tableau vide avec X valeurs
        for (int i = 0 ; i < monTableau2.length ; i++) {
            System.out.println(monTableau2[i]);
        }
    }


    public static void exercice1(Scanner scan) {
        int choice = 0;

        do {
            System.out.println("Veuillez saisir un nombre : \n");
            choice = scan.nextInt();
        } while (choice < 1 || choice > 3);

        System.out.println("Ok");
    }

    public static void exercice2(Scanner scan) {
        int choice = 0;

        do {
            System.out.println("Veuillez saisir un nombre : \n");
            choice = scan.nextInt();

            if (choice < 10) {
                System.out.println("Plus grand !");
            }
            else if (choice > 20) {
                System.out.println("Plus petit !");
            }

        } while (choice < 10 || choice > 20);

        System.out.println("Ok");

    }

    public static void exercice3(Scanner scan) {

        System.out.println("Veuillez saisir un nombre :");
        int choice = scan.nextInt();

        for (int i = 0 ; i < 10 ; i++) {
            choice += 1;
            System.out.print(choice + "\n");
        }
    }

    public static void exercice5(Scanner scan) {
        System.out.println("Veuillez saisir un nombre :");
        int choice = scan.nextInt();

        System.out.println("Table de " + choice + ":");
        for (int i = 1 ; i < 11 ; i ++) {
            System.out.println(choice + " x " + i + " = " + choice*i);
        }
    }


    public static void exercice6(Scanner scan) {
        System.out.println("Veuillez saisir un nombre :");
        int choice = scan.nextInt();
        int result = 0;

        for (int i = 1 ; i <= choice ; i++) {
            result += i;
        }
        System.out.println(result);
    }


    public static void exercice7(Scanner scan) {
        System.out.println("Veuillez saisir un nombre :");
        int choice = scan.nextInt();
        int result = 1;

        for (int i = 2 ; i <= choice ; i++) {
            result *= i;
        }
        System.out.println(result);
    }

    public static void exercice8(Scanner scan) {
        int choice = 0;
        int highest = 0;
        int position = 0;

        for (int i = 1 ; i < 5 ; i++) {
            System.out.println("Entrez le nombre " + i);
            choice = scan.nextInt();

            if (choice > highest) {
                highest = choice;
                position = i;
            }
        }
        System.out.println("Le plus grand nombre saisi est le " + highest + ", il se trouvait en position " + position);
    }


    public static void exercice9(Scanner scan) {
        int choice = 0;
        int highest = 0;
        int position = 0;
        int i = 1;

        do {
            System.out.println("Entrez le nombre " + i);
            choice = scan.nextInt();


            if (choice > highest) {
                highest = choice;
                position = i;
            }

            i++;
        } while (choice != 0);
        System.out.println("Le plus grand nombre saisi est le " + highest + ", il se trouvait en position " + position);
    }

    public static void exercice10(Scanner scan) {
        int choice = 0;
        int somme = 0;
        int montantDonne = 0;
        int aRendre = 0;
        int dixEuros = 0;
        int cinqEuros = 0;


        do {
            System.out.println("Veuillez saisir le prix de l'article :");
            choice = scan.nextInt();
            somme += choice;
        } while (choice != 0);
        System.out.println("Somme totale : " + somme);

        System.out.println("Montant donné :");
        montantDonne = scan.nextInt();

        aRendre = montantDonne - somme;
        System.out.println("Montant à rendre : " + aRendre );

        if (aRendre >= 10) {
            dixEuros = aRendre / 10;
            aRendre -= dixEuros*10;
        }

        if (aRendre >=5) {
            cinqEuros = aRendre/5;
            aRendre -= cinqEuros*5;
        }


        for (int i = 0 ; i < dixEuros ; i++) {
            System.out.println("Dix Euros");
        }
        for (int j = 0 ; j < cinqEuros ; j++) {
            System.out.println("Cinq Euros");
        }
        for (int k = 0 ; k < aRendre ; k++) {
            System.out.println("Un euro");
       }

}

    public static void exercice11(Scanner scan) {
        System.out.println("Indiquez le nombre de chevaux partants :");
        int chevauxPartants = scan.nextInt();
        System.out.println("Indiquez le nombre de chevaux joués :");
        int chevauxJoues = scan.nextInt();

        int factoriellePartants = 1;
        for (int i = 2 ; i <= chevauxPartants ; i++) {
            factoriellePartants *= i;
        }

        int factorielleJoues = 1;
        for (int i = 2 ; i <= chevauxJoues; i ++) {
            factorielleJoues *= i;
        }

        int factorielleDiffPartantJoues = 1;
        for (int i = 2 ; i <= chevauxPartants-chevauxJoues ; i ++) {
            factorielleDiffPartantJoues *= i;
        }

        int chancesDeGagnerOrdre = factoriellePartants / factorielleDiffPartantJoues;
        int chancesDeGagnerDesordre = factoriellePartants / (factorielleJoues * factorielleDiffPartantJoues);

        System.out.println("Dans l'ordre: vous avez une chance sur " + chancesDeGagnerOrdre + " de gagner");
        System.out.println("Dans le désordre: vous avez une chance sur " + chancesDeGagnerDesordre + " de gagner");

    }

    public static void exercice12(Scanner scan) {
        System.out.println("Indiquez la borne inférieure :");
        int borneInf = scan.nextInt();
        System.out.println("Indiquez la borne supérieure :");
        int borneSup = scan.nextInt();

        for (int i = borneInf ; i <= borneSup ; i++) {

            if (i % 3 == 0 && i % 5 == 0) {
                System.out.println("FizzBuzz");
            }
            else if (i % 3 == 0) {
                System.out.println("Fizz");
            }
            else if (i % 5 == 0) {
                System.out.println("Buzz");
            }
            else {
                System.out.println(i);
            }
        }
    }


    public static void exercice13(Scanner scan) {
        String [] monTableau = {" ", " ", " ", " ", " ", " ", " ", "*", " ", " ", " ", " ", " ", " ", " "};
        String [] monTableau2 = new String[15];
        monTableau2[0] = monTableau[0];
        monTableau2[14] = monTableau[14];

        for (int i = 1 ; i < monTableau.length - 1 ; i ++) {
            /*if (monTableau[i] == "*" && monTableau[i - 1] == "*" && monTableau[i + 1] == "*") {
                monTableau[i] = "*";
            }
            else if (monTableau[i] == "*" && monTableau[i - 1] == "*" && monTableau[i + 1] == " ") {
                monTableau[i] = "*";
            }
            else if (monTableau[i] == " " && monTableau[i - 1] == "*" && monTableau[i + 1] == "*") {
                monTableau[i] = "*";
            }
            else if (monTableau[i] == " " && monTableau[i - 1] == "*" && monTableau[i + 1] == " ") {
                monTableau[i] = "*";
            }
            else if (monTableau[i] == "*" && monTableau[i - 1] == " " && monTableau[i + 1] == "*") {
                monTableau[i] = "*";
            }
            else if (monTableau[i] == "*" && monTableau[i - 1] == " " && monTableau[i + 1] == " ") {
                monTableau[i] = "*";
            }
            else if (monTableau[i] == " " && monTableau[i - 1] == " " && monTableau[i + 1] == "*") {
                monTableau[i] = "*";
            }*/
            if (monTableau[i] == " " && monTableau[i - 1] == " " && monTableau[i + 1] == " ") {
                monTableau2[i] = " ";
            }
            else {
                    monTableau2[i] = "*";
            }

        }
        System.out.print(Arrays.toString(monTableau2) + "\n");
    }

    public static void exercice14(Scanner scan) {
        String [] monTableau = new String[6];
        monTableau[0] = "a";
        monTableau[1] = "e";
        monTableau[2] = "i";
        monTableau[3] = "o";
        monTableau[4] = "u";
        monTableau[5] = "y";

        System.out.println(Arrays.toString(monTableau));
    }

    public static void exercice15(Scanner scan) {
        int [] monTableau = new int[9];

        for (int i = 0 ; i < monTableau.length ; i++) {
            System.out.println("Saisir un nombre entier - 0 pour quitter");
            monTableau[i] = scan.nextInt();

            if(monTableau[i] == 0) {
                break;
            }
        }
        System.out.println(Arrays.toString(monTableau));
    }

    public static void exercice16(Scanner scan) {
        int [] monTableau = new int[8];
        for (int i = 0 ; i < 8 ; i++) {
            monTableau[i] = i+2;
        }
        System.out.println(Arrays.toString(monTableau));
    }
}
