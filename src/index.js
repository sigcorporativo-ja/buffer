import M$plugin$Buffer from './/facade/js/buffer';
import M$layer$BufferLayer from './/facade/js/bufferLayer';
import M$impl$control$BufferControl from './/impl/ol/js/buffercontrolImpl';

if (!window.M.plugin) window.M.plugin = {};
if (!window.M.layer) window.M.layer = {};
if (!window.M.impl) window.M.impl = {};
if (!window.M.impl.control) window.M.impl.control = {};
window.M.plugin.Buffer = M$plugin$Buffer;
window.M.layer.BufferLayer = M$layer$BufferLayer;
window.M.impl.control.BufferControl = M$impl$control$BufferControl;
