"use server";
import { nanoid } from "nanoid";
import { liveblocks } from "../liveblocks";
import { revalidatePath } from "next/cache";
import { parseStringify } from "../utils";
export const createDocument = async ({
  userId,
  email,
}: CreateDocumentParams) => {
  const roomId = nanoid();
  try {
    const metadata = {
      creatorId: userId,
      email,
      title: "Untitled Document",
    };
    const userAccessess: RoomAccesses = {
      [email]: ["room:write"],
    };
    const room = await liveblocks.createRoom(roomId, {
      metadata,
      usersAccesses: userAccessess,
      defaultAccesses: [],
    });
    revalidatePath("/");
    return parseStringify(room);
  } catch (error) {
    console.log(`Error happen while creating a room ${error}`);
  }
};
