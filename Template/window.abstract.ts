export abstract class Window {
  public close(): void {
    console.log("closing the window");
    this.afterClose();
  }

  // hook method
  protected abstract afterClose(): void;
}
