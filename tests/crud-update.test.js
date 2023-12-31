import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create customer", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: "Yuli saja",
        email: "yulisaja@gmail.com",
      },
      where: {
        id: "1",
      },
    });

    expect(customer.id).toBe("1");
    expect(customer.email).toBe("yulisaja@gmail.com");
    expect(customer.name).toBe("Yuli saja");
    expect(customer.phone).toBe("08123456789");
  });
});
