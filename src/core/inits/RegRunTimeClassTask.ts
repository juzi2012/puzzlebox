// TypeScript file
class RegRunTimeClassTask{     
    public constructor() {
        this.exec();
    }

    private exec():void{			
        fairygui.UIObjectFactory.setPackageItemExtension(game.UI_FloatScore.URL, FloatScore);
    }
}