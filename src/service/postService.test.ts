jest.mock('../../lib/supabase', () => ({
  supabase: {
    from: jest.fn(),
  },
}));

import { supabase } from '../../lib/supabase';
import { addLikeFromPost, createPost, fetchAllPosts } from './postService';

describe("postService functions tests", () => {

    it("createPost sucess", async () => {
      
      var id: string = "1"
      var post: string = "post tests"

      const mockResponse = {
          data: [{
              id_user_post: id,
              text_post: post
          }],
          error: null,
      };

      const selectMock = jest.fn().mockResolvedValue(mockResponse);
      const insertMock = jest.fn(() => ({ select: selectMock }));
      const fromMock = jest.fn(() => ({ insert: insertMock }));
      
      (supabase.from as jest.Mock).mockImplementation(fromMock);
      
      const result = await createPost({ idUserPost: id, textPost: post })
      
      expect(result).toEqual(true);
      expect(supabase.from).toHaveBeenCalledWith('posts');
      expect(insertMock).toHaveBeenCalledWith(
          { id_user_post: id, text_post: post },
      );

    });

    it("createPost error", async () => {

      var id: string = "1"
      var post: string = "post tests"

      const mockResponse = {
          data: null,
          error: Error('Error creating post'),
      };

      const insertMock = jest.fn().mockResolvedValue(mockResponse);
      const fromMock = jest.fn(() => ({ insert: insertMock }));

      (supabase.from as jest.Mock).mockImplementation(fromMock);

      await expect(
        createPost({ idUserPost: id, textPost: post })
      ).rejects.toThrow('Error creating post');

    });

    it("fetch posts sucess", async () => {
      const mockPosts = [
        {
          id_post: 1,
          id_user_post: [{ name: 'user-test' }],
          text_post: 'post test',
          datetime_create: '2025-03-27',
          datetime_update: null,
        },
      ];

      const mockLikes = [
        { id_post: 1 },
      ];

      (supabase.from as jest.Mock)
        .mockImplementationOnce(() => ({
          select: () => ({
            order: () => Promise.resolve({ data: mockPosts, error: null }),
          }),
        }))
        .mockImplementationOnce(() => ({
          select: () => ({
            eq: () => Promise.resolve({ data: mockLikes, error: null }),
          }),
      }));

      const result = await fetchAllPosts('1');

      expect(result).toEqual([
        {
          ...mockPosts[0],
          id_user_post: { name: 'user-test' },
          liked_by_user: true,
        },
      ]);

    });

    it("fetch posts error", async() => {
      
      (supabase.from as jest.Mock)
      .mockImplementationOnce(() => ({
        select: () => ({
          order: () => Promise.resolve({ data: null, error: new Error('Error posts') }),
        }),
      })).mockImplementationOnce(() => ({
        select: () => ({
          eq: () => Promise.resolve({ data: [], error: null }),
        }),
      }));
      
      await expect(fetchAllPosts('user-test')).rejects.toThrow('Error posts');
      
    });

    it("add like sucess", async() => {
      const mockResponse = {
        data: [{
          idPost: "1",
          idUserLike: "1"
        }],
        error: null
      }

      const selectMock = jest.fn().mockResolvedValue(mockResponse);
      const insertMock = jest.fn(() => ({ select: selectMock }));
      const fromMock = jest.fn(() => ({ insert: insertMock }));

      (supabase.from as jest.Mock).mockImplementation(fromMock);

      const result = await addLikeFromPost("1", "1")

      expect(result).toEqual(true);
      expect(supabase.from).toHaveBeenCalledWith('likes');
      expect(insertMock).toHaveBeenCalledWith({ id_post:"1", id_user_like:"1" });

    });

    it("add like error", async() => {
      const mockResponse = {
        data: null,
        error: Error('Error add Like'),
      };

      const insertMock = jest.fn().mockResolvedValue(mockResponse);
      const fromMock = jest.fn(() => ({ insert: insertMock }));

      (supabase.from as jest.Mock).mockImplementation(fromMock);

      await expect(
        addLikeFromPost("1","1")
      ).rejects.toThrow('Error add Like');

    });

});