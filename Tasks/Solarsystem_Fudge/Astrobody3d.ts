namespace SolarsystemFudge {

    export class Body3d {
        private static mesh: f.Mesh;
        private static material: f.Material;

        public position: f.Vector3;
        public name: string;

        private size: number;
        private distance: number;
        private vOrbit: number
        private cmpMesh: f.ComponentMesh;
        private cmpMaterial: f.ComponentMaterial;
        private cmpTransform: f.ComponentTransform;


        public constructor(_name: string, _size: number) {
            this.name = _name;
            this.size = _size;

        }
    }
}