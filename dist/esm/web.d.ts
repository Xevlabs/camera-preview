import { WebPlugin } from "@capacitor/core";
import { CameraPreviewOptions, CameraPreviewPictureOptions, CameraPreviewPlugin, CameraPreviewFlashMode } from "./definitions";
export declare class CameraPreviewWeb extends WebPlugin implements CameraPreviewPlugin {
    constructor();
    start(options: CameraPreviewOptions): Promise<{}>;
    stop(): Promise<any>;
    capture(_options: CameraPreviewPictureOptions): Promise<any>;
    getSupportedFlashModes(): Promise<{
        result: CameraPreviewFlashMode[];
    }>;
    setFlashMode(_options: {
        flashMode: CameraPreviewFlashMode | string;
    }): Promise<void>;
    flip(): Promise<void>;
}
declare const CameraPreview: CameraPreviewWeb;
export { CameraPreview };
