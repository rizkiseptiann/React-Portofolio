import RizkiImage from "/assets/rizki-img.webp";

const Image = {
  RizkiImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
// import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
// import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  
  {
    id: 3,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 4,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 5,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 6,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 7,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
 
  {
    id: 8,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 9,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Website Azjovi Bakery",
    desk: "Mengembangkan situs web menggunakan Bootstrap, memanfaatkan teknologi modern untuk meningkatkan fungsionalitas dan responsivitas. Website ini dirancang sebagai platform promosi dan katalog produk untuk UMKM yang bergerak di bidang kuliner, khususnya penjualan kue tradisional. Website menampilkan informasi produk, deskripsi usaha, serta meningkatkan daya tarik visual dan membantu pelanggan lebih mudah mengenal produk yang ditawarkan.",
    tools: ["PHP", "CSS", "Javascript", "Bootstrap"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "CRUD App",
    desk: "Aplikasi Web CRUD yang saya kembangkan menggunakan ReactJS sebagai frontend, Node.js + Express sebagai backend, serta MySQL sebagai database. Aplikasi ini memungkinkan pengguna untuk melakukan pengelolaan data user meliputi menambah, menampilkan, mengubah, dan menghapus data secara real-time melalui antarmuka yang responsif.",
    tools: ["ReactJS", "NodeJS", "Express", "MySQL"],
    dad: "300",
  },
  
];
