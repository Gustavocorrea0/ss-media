jest.mock('../../lib/supabase', () => ({
  supabase: {
    auth: {
      signInWithPassword: jest.fn(),
    },
  },
}));

import { supabase } from "../../lib/supabase";
import { signInApp } from "./authService";

describe("signIn test", () => {

    it("valid if login is successful", async () => {
        const mockResponse = {
            data: { user: { id: '123' } },
            error: null,
        };

        (supabase.auth.signInWithPassword as jest.Mock).mockResolvedValue(mockResponse);

        const result = await signInApp({
            email: 'teste@email.com',
            password: '123456',
        });

        expect(result).toEqual(mockResponse.data);

        expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
          email: 'teste@email.com',
          password: '123456',
        });
    });

    it('valid if login is fail', async () => {
        const mockResponse = {
            data: null,
            error: new Error('Invalid credentials'),
        };

        (supabase.auth.signInWithPassword as jest.Mock).mockResolvedValue(mockResponse);

        await expect(
            signInApp({
                email: 'teste@email.com',
                password: 'senhaErrada',
            })
        ).rejects.toThrow('Invalid credentials');
    });


})