-- CreateTable
CREATE TABLE "employee" (
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "department" TEXT NOT NULL,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "rating" (
    "id" TEXT NOT NULL,
    "employeeEmail" TEXT NOT NULL,
    "whoVoted" TEXT NOT NULL,
    "note_1" INTEGER,
    "note_2" INTEGER,
    "note_3" INTEGER,
    "note_4" INTEGER,
    "note_5" INTEGER,
    "note_6" INTEGER,
    "note_7" INTEGER,
    "note_8" INTEGER,
    "note_9" INTEGER,
    "votedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "rating" ADD CONSTRAINT "rating_employeeEmail_fkey" FOREIGN KEY ("employeeEmail") REFERENCES "employee"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
