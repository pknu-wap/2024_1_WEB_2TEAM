package wealthwise.BE.domain.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "index_table")
public class Index {

    @Id
    @Column(name = "index_id")
    private Integer indexId;

    @Column(name = "major_category")
    private String majorCategory;

    @Column(name = "medium_category")
    private String mediumCategory;

    @Column(name = "minor_category")
    private String minorCategory;

    @Column(name = "link")
    private String link;

    // Getters and Setters
    public Integer getIndexId() {
        return indexId;
    }

    public void setIndexId(Integer indexId) {
        this.indexId = indexId;
    }

    public String getMajorCategory() {
        return majorCategory;
    }

    public void setMajorCategory(String majorCategory) {
        this.majorCategory = majorCategory;
    }

    public String getMediumCategory() {
        return mediumCategory;
    }

    public void setMediumCategory(String mediumCategory) {
        this.mediumCategory = mediumCategory;
    }

    public String getMinorCategory() {
        return minorCategory;
    }

    public void setMinorCategory(String minorCategory) {
        this.minorCategory = minorCategory;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
