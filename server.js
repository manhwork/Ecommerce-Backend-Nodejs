const app = require("./src/app");
const PORT = 3000;

const server = app.listen(PORT, () => {
    console.log(`Website start with ${PORT}`);
});
// Khi end chương trình thì thông báo điều này
process.on("SIGINT", () => {
    server.close(() => {
        console.log(`Exit Server `);
        // notify sending ping ....
    });
});
