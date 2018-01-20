export class GalleryImage {
     $key?: string;
     name?: string;
     url?: string;
    
     constructor(
            public category : string = "",
            public caption : string = "",
            public detail : string = "" ) { }
}