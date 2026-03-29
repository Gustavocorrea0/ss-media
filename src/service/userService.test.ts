jest.mock('../../lib/supabase', () => ({
  supabase: {
    auth: {
      getUser: jest.fn(),
    },
  },
}));

import { supabase } from '../../lib/supabase';
import { fetchCurrentUser } from './userService';

describe("userService functions tests", () => {

    it("fetchCurrentUser exists", async () => {
        const mockResponse = {
            data: {
                user: { id: 'user-123' },
            },
            error: null,
        };

        (supabase.auth.getUser as jest.Mock).mockResolvedValue(mockResponse);

        const result = await fetchCurrentUser();
        expect(result).toBe('user-123');
        expect(supabase.auth.getUser).toHaveBeenCalled();
    });

    it("fetchCurrentUser not exists", async () => {
        const mockResponse = {
            data: { user: null },
            error: new Error('Not authenticated'),
        };

        (supabase.auth.getUser as jest.Mock).mockResolvedValue(mockResponse);

        await expect(fetchCurrentUser()).rejects.toThrow('Not authenticated');
    });

});