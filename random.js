
module.exports = function(RED) {
    "use strict";
    function TestNode(n) {
        RED.nodes.createNode(this,n);
        var node = this;
        this.on("input", function(msg) {
            node.send(msg);
        });
    }
    RED.nodes.registerType("test-node",TestNode);
}
