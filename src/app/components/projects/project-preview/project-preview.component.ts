import { Component, OnInit, Input } from "@angular/core";
import { ProjectDataModule } from "src/app/model/project-data/project-data.module";

@Component({
  selector: "app-project-preview",
  templateUrl: "./project-preview.component.html",
  styleUrls: ["./project-preview.component.css"],
})
export class ProjectPreviewComponent implements OnInit {
  @Input() project: ProjectDataModule;
  webLink: string = "https://i.imgur.com/BCRnjrH.png";

  constructor() {}

  ngOnInit(): void {}
  //Open the project Link
  openLink(): void {
    window.open(this.project.link, "_blank");
  }
  //Check if the project data is valid
  valid(): boolean {
    return this.project != null;
  }
  //Get the project name
  getName(): string {
    if (this.project) {
      return this.project.name;
    }
    return "";
  }
  //Get the project img
  getImg(): string {
    if (this.project) {
      return this.project.img;
    }
    return "";
  }
  //Get the project description
  getDescription(): string {
    if (this.project) {
      return this.project.description;
    }
    return "";
  }
}
