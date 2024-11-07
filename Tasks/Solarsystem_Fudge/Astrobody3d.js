"use strict";
var SolarsystemFudge;
(function (SolarsystemFudge) {
    SolarsystemFudge.f = FudgeCore;
    class Body3d extends SolarsystemFudge.f.Node {
        constructor(_name, _size, _distance, _vOrbit, _color) {
            super(_name);
            this.distance = 0;
            this.vOrbit = 0;
            this.vRotation = 0;
            this.name = _name;
            this.size = _size;
            this.vOrbit = _vOrbit;
            this.rotationNode = new SolarsystemFudge.f.Node(_name + " Rotation Node");
            this.rotationNode.addComponent(new SolarsystemFudge.f.ComponentTransform());
            this.rotationNode.addChild(this);
            const tempMat = new SolarsystemFudge.f.ComponentMaterial(Body3d.material);
            tempMat.clrPrimary.setCSS(_color);
            this.addComponent(new SolarsystemFudge.f.ComponentMesh(Body3d.mesh));
            this.addComponent(tempMat);
            this.addComponent(new SolarsystemFudge.f.ComponentTransform());
            this.mtxLocal.translateX(_distance);
        }
        step() {
            this.rotationNode.mtxLocal.rotateY(this.vOrbit);
            const c = this.getChild(0);
            if (c) {
                for (const bodyNode of c.getChildren()) {
                    bodyNode.step();
                }
            }
        }
        setTransform(_vOrbit, _vRotation, _distance) {
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
            this.distance = _distance;
        }
    }
    Body3d.mesh = new SolarsystemFudge.f.MeshSphere("Body");
    Body3d.material = new SolarsystemFudge.f.Material("BodyMat", SolarsystemFudge.f.ShaderLit);
    SolarsystemFudge.Body3d = Body3d;
})(SolarsystemFudge || (SolarsystemFudge = {}));
//# sourceMappingURL=Astrobody3d.js.map