-- CreateTable
CREATE TABLE "User" (
    "kindeId" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "image" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "User_kindeId_key" ON "User"("kindeId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
