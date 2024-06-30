"use server";

import { auth, update } from "@/auth";
import { db } from "@/app/_lib/prisma";
import { UserSettingsSchema } from "@/schemas/auth";
import { findUserbyId } from "@/services";
import bcryptjs from "bcryptjs";
import type { z } from "zod";

/**
 * This method saves the user's new settings
 * @param {z.infer<typeof UserSettingsSchema>} user - The new user data.
 * @returns {Promise<{error?: string, success?: string}>} The result of the settings change request.
 */
export const changeSettings = async (
  settings: z.infer<typeof UserSettingsSchema>,
) => {
  const validData = UserSettingsSchema.safeParse(settings);

  if (!validData.success) {
    return {
      error: "Dados inválidos",
    };
  }

  const session = await auth();
  if (!session?.user || !session?.user.id) {
    return {
      error: "Conecte-se para atualizar seus dados",
    };
  }

  const userData = await findUserbyId(session?.user.id);
  console.log(userData);
  if (!userData) {
    return {
      error: "Usuário não encontrado",
    };
  }

  // TODO: Add e-mail verification to enable two factor authentication
  const { password, newPassword } = validData.data;
  if (password && newPassword && userData?.password) {
    const validPassword = bcryptjs.compare(password, userData.password);
    if (!validPassword) {
      return {
        error: "Senha atual incorreta",
      };
    }

    settings.newPassword = undefined;
    settings.password = await bcryptjs.hash(newPassword, 10);
  }
  settings.email = undefined;
  // settings.isTwoFactorEnabled = undefined;
  try {
    console.log(settings);
    const updatedUser = await db.user.update({
      data: {
        ...settings,
      },
      where: {
        id: userData.id,
      },
    });

    await update({
      user: {
        ...session.user,
        name: updatedUser.name,
        isTwoFactorEnabled: updatedUser.isTwoFactorAuthEnabled,
        // TODO: Add fields to chande roles and or e-mail for the user????
      },
    });
    return {
      success: "Perfil atualizado",
    };
  } catch (error) {
    return {
      error: "Algo deu errado",
    };
  }
};
