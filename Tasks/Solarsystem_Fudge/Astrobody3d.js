"use strict";
var SolarsystemFudge;
(function (SolarsystemFudge) {
    class Body3d extends SolarsystemFudge.f.Node {
        constructor(_name, _size) {
            super(_name);
            this.distance = 0;
            this.vOrbit = 0;
            this.vRotation = 0;
            this.name = _name;
            this.size = _size;
            this.cmpMesh = new SolarsystemFudge.f.ComponentMesh(Body3d.mesh);
            this.cmpMaterial = new SolarsystemFudge.f.ComponentMaterial(Body3d.material);
            this.addComponent(new SolarsystemFudge.f.ComponentTransform());
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