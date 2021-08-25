public class Equipement {


    private int id;
    private String nomEquipement;




    public Equipement(int id, String nomEquipement) {
        this.id = id;
        this.nomEquipement = nomEquipement;
    }




    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNomEquipement() {
        return nomEquipement;
    }

    public void setNomEquipement(String nomEquipement) {
        this.nomEquipement = nomEquipement;
    }
}
