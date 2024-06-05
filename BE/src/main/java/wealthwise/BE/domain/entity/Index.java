package wealthwise.BE.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "index")
public class Index {

    @Id
    @Column(name = "index_id")
    private Integer index_id;

    @Column(name = "major_category")
    private String major_category;

    @Column(name = "medium_category")
    private String medium_category;

    @Column(name = "minor_category")
    private String minor_category;

    @Column(name = "link")
    private String link;

    // Getters and Setters
    public Integer getIndex_id() {
        return index_id;
    }

    public void setIndex_id(Integer index_id) {
        this.index_id = index_id;
    }

    public String getMajor_category() {
        return major_category;
    }

    public void setMajor_category(String major_category) {
        this.major_category = major_category;
    }

    public String getMedium_category() {
        return medium_category;
    }

    public void setMedium_category(String medium_category) {
        this.medium_category = medium_category;
    }

    public String getMinor_category() {
        return minor_category;
    }

    public void setMinor_category(String minor_category) {
        this.minor_category = minor_category;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
