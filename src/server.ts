import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import express from "express";

import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const prisma = new PrismaClient({
  log: ["query"],
});

app.use(express.json());

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/employees/:id", async (req, res) => {
  const employee = req.params.id;

  const employeeAlreadyExists: any = await prisma.employee.findMany({
    where: {
      email: {
        equals: `${employee}`,
      },
    },
  });

  if (employeeAlreadyExists.length == 0) {
    return res.status(400).send({ Error: "Employee does not exists" });
  }

  const getEmployees: any = await prisma.employee.findMany({
    where: {
      email: {
        not: `${employee}`,
      },
    },
    include: {
      ratings: {
        select: {
          whoVoted: true,
        },
      },
    },
  });

  return res.status(200).json(getEmployees);
});

app.post("/employee/:id/rating", async (req, res) => {
  const employeeId = req.params.id;
  const body = req.body;

  const voteAlreadyExists = await prisma.rating.findMany({
    where: {
      employeeEmail: {
        equals: `${employeeId}`,
      },
      whoVoted: `${body.whoVoted}`,
    },
  });

  if (voteAlreadyExists.length == 0) {
    const rating = await prisma.rating.create({
      data: {
        employeeEmail: employeeId,
        whoVoted: body.whoVoted,
        note1: body.note1,
        note2: body.note2,
        note3: body.note3,
        note4: body.note4,
        note5: body.note5,
        note6: body.note6,
        note7: body.note7,
        note8: body.note8,
        note9: body.note9,
        votedAt: body.votedAt,
      },
    });

    return res.status(200).json(rating);
  }

  return res
    .status(400)
    .send({ Error: "Ops parece que vc ja votou nesse funcionário" });
});

app.listen(process.env.PORT || 3333);
