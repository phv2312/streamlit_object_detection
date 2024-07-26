import FabricTool, { ConfigureCanvasProps } from "./fabrictool"

class TransformTool extends FabricTool {
  configureCanvas(args: ConfigureCanvasProps): () => void {
    let canvas = this._canvas
    canvas.isDrawingMode = false
    canvas.selection = false // Handle multiple selection.
    canvas.forEachObject((o) => (o.selectable = o.evented = true))

    // instead of looking for target of double click,
    // assume double click on object clears the selected object
    const handleDoubleClick = () => {
      canvas.remove(canvas.getActiveObject())
    }

    return () => {}

    // canvas.on("mouse:dblclick", handleDoubleClick)
    // return () => {
    //   canvas.off("mouse:dblclick", handleDoubleClick)
    // }
  }

  onMouseDown(o: any) {
    
  }

}

export default TransformTool
