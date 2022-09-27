"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient({
    log: ["query"],
});
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/employees/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employee = req.params.id;
    const getEmployees = yield prisma.employee.findMany({
        where: {
            email: {
                not: `${employee}`,
            },
        },
        include: {
            ratings: true,
        },
    });
    return res.status(200).json(getEmployees);
}));
app.post("/employee/:id/rating", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employeeId = req.params.id;
    const body = req.body;
    const voteAlreadyExists = yield prisma.rating.findMany({
        where: {
            employeeEmail: {
                equals: `${employeeId}`,
            },
            whoVoted: `${body.whoVoted}`,
        },
    });
    if (voteAlreadyExists.length == 0) {
        const rating = yield prisma.rating.create({
            data: {
                employeeEmail: employeeId,
                whoVoted: body.whoVoted,
                sensoTime: body.sensoTime,
                atitudeEmpreendedora: body.atitudeEmpreendedora,
                autonomiaResponsabilidade: body.autonomiaResponsabilidade,
                sensoDono: body.sensoDono,
                focoResultado: body.focoResultado,
                focoCliente: body.focoCliente,
                visaoSistemica: body.visaoSistemica,
                inovacao: body.inovacao,
                liderancaInspiradora: body.liderancaInspiradora,
                votedAt: body.votedAt,
            },
        });
        return res.status(200).json(rating);
    }
    return res
        .status(400)
        .send({ Error: "Ops parece que vc ja votou nesse funcionário" });
}));
const port = 3333;
app.listen(process.env.PORT || port, () => {
    console.log(`Server is running in port ${port}`);
});
