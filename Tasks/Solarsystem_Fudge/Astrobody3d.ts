namespace SolarsystemFudge {
    export import f = FudgeCore;

    export class Body3d extends f.Node {
        private static mesh: f.Mesh = new f.MeshSphere("Body");
        private static material: f.Material = new f.Material("BodyMat", f.ShaderLit);

        //public position: f.Vector3;
        //public name: string;

        public rotationNode: f.Node;
        private size: number;
        private distance: number = 0;
        private vOrbit: number = 0;
        private vRotation: number = 0;




        public constructor(_name: string, _size: number, _distance: number, _vOrbit: number, _color: string) {
            super(_name)
            this.name = _name;
            this.size = _size;
            this.vOrbit = _vOrbit;

            this.rotationNode = new f.Node(_name + " Rotation Node")
            this.rotationNode.addComponent(new f.ComponentTransform());
            this.rotationNode.addChild(this);

            const tempMat: f.ComponentMaterial = new f.ComponentMaterial(Body3d.material);
            tempMat.clrPrimary.setCSS(_color);

            this.addComponent(new f.ComponentMesh(Body3d.mesh));
            this.addComponent(tempMat);
            this.addComponent(new f.ComponentTransform());

            this.mtxLocal.translateX(_distance);

        }

        public step(): void {
            this.rotationNode.mtxLocal.rotateY(this.vOrbit);

            const c: f.Node = this.getChild(0)

            if (c) {
                for (const bodyNode of c.getChildren()) {
                    (bodyNode as Body3d).step();
                }
            }
        }
        public setTransform(_vOrbit: number, _vRotation: number, _distance: number): void {
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
            this.distance = _distance;


        }


    }
}