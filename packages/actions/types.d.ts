import drag, { DraggableMethod } from './drag'
import gesture from './gesture'
import resize from './resize'

// drag
declare module '@interactjs/core/Interactable' {
  interface Interactable {
    draggable: DraggableMethod
  }
}

declare module '@interactjs/core/defaultOptions' {
  interface ActionDefaults {
    drag?: Interact.DraggableOptions
  }
}

declare module '@interactjs/core/scope' {
  interface Actions {
    drag?: typeof drag
  }
}

// resize
declare module '@interactjs/core/Interactable' {
  interface Interactable {
    resizable: (options?: any) => Interactable | { [key: string]: any }
  }
}

declare module '@interactjs/core/InteractEvent' {
  interface InteractEvent {
    deltaRect?: Interact.Rect
    rect?: Interact.Rect
  }
}

declare module '@interactjs/core/Interaction' {
  interface Interaction {
    resizeAxes: 'x' | 'y' | 'xy'
  }
}

declare module '@interactjs/core/defaultOptions' {
  interface ActionDefaults {
    resize?: Interact.ResizableOptions
  }
}

declare module '@interactjs/core/scope' {
  interface Actions {
    resize?: typeof resize
  }
}

// gesture
declare module '@interactjs/core/Interactable' {
  interface Interactable {
    gesturable: (options?: any) => Interactable | { [key: string]: any }
  }
}

declare module '@interactjs/core/defaultOptions' {
  interface ActionDefaults {
    gesture?: Interact.GesturableOptions
  }
}

declare module '@interactjs/core/scope' {
  interface Actions {
    gesture?: typeof gesture
  }
}
