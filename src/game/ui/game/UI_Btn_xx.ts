/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module game {

	export class UI_Btn_xx extends fairygui.GButton {

		public m_button:fairygui.Controller;
		public m_n1:fairygui.GImage;

		public static URL:string = "ui://7cac2uhfj0b525";

		public static createInstance():UI_Btn_xx {
			return <UI_Btn_xx><any>(fairygui.UIPackage.createObject("game","Btn_xx"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.m_button = this.getControllerAt(0);
			this.m_n1 = <fairygui.GImage><any>(this.getChildAt(0));
		}
	}
}