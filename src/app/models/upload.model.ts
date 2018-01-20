//export class GalleryImage
import { GalleryImage } from "./galleryImage.model";
export class Upload {
    $key: string;
    file: File;
    url: string;
    progress: number;
    createdOn: Date = new Date();
    name: string;
    
    constructor(
        file: File,
        public imageData: GalleryImage = null) {
                this.file = file;
                this.imageData = new GalleryImage();
    }
}
