import figlet from "figlet";
import standard from "figlet/importable-fonts/Standard.js";

figlet.parseFont("Standard", standard);

export const clgTetris = () => {
    figlet.text(
        "TETRIS",
        {
            font: "Standard",
        },
        function (err, data) {
            console.log('\n',data);
        }
    );
}
