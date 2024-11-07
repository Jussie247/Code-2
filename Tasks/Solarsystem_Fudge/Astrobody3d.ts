namespace SolarsystemFudge {

    export class Body3d extends f.Node {
        private static mesh: f.Mesh = new f.MeshSphere("Body");
        private static material: f.Material = new f.Material("BodyMat", f.ShaderLit);

        //public position: f.Vector3;
        //public name: string;

        private size: number;
        private distance: number = 0;
        private vOrbit: number = 0;
        private vRotation: number = 0;
        private cmpMesh: f.ComponentMesh;
        private cmpMaterial: f.ComponentMaterial;



        public constructor(_name: string, _size: number) {
            super(_name)
            this.name = _name;
            this.size = _size;

            this.cmpMesh = new f.ComponentMesh(Body3d.mesh);
            this.cmpMaterial = new f.ComponentMaterial(Body3d.material);
            this.addComponent(new f.ComponentTransform());

        }
        public setTransform(_vOrbit: number, _vRotation: number, _distance: number): void {
            this.vOrbit = _vOrbit / 1000 * (Math.PI / 180);
            this.vRotation = _vRotation / 1000 * (Math.PI / 180);
            this.distance = _distance;
        }
    }
}