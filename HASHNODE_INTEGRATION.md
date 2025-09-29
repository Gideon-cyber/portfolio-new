# Hashnode Blog Integration

This portfolio integrates with Hashnode to automatically fetch and display your blog articles alongside local articles.

## Quick Setup

1. **Get Your Access Token**:
   - Go to [Hashnode Settings → Developer](https://hashnode.com/settings/developer)
   - Generate a new Personal Access Token
   - Copy the token

2. **Find Your Hashnode Username**:
   - Go to your Hashnode profile
   - Your username is in the URL: `https://hashnode.com/@your_username`
   - Or check your profile settings

3. **Configure Environment Variables**:
   Create or update your `.env.local` file:

   ```bash
   HASHNODE_ACCESS_TOKEN=your_token_here
   HASHNODE_USERNAME=your_hashnode_username
   ```

4. **Verify Integration**:
   - Start your development server: `npm run dev`
   - Visit `/articles` to see your combined local and Hashnode articles

## Troubleshooting

### "HTTP error! status: 400"

This usually means:

- Invalid username (user doesn't exist on Hashnode)
- Incorrect API token format
- GraphQL query parameters mismatch

### "user": null in API response

This means:

- The username doesn't exist on Hashnode
- The user has no published posts
- Check your username spelling and try again

### No articles showing

- Verify your username is correct
- Check that you have published articles on Hashnode
- Ensure your access token has the correct permissions

## Features

- **Automatic Fetching:** Articles are automatically fetched from Hashnode when the articles page loads
- **Mixed Content:** Local MDX articles and Hashnode articles are combined and sorted by date
- **External Links:** Hashnode articles open in new tabs with proper indicators
- **Metadata Display:** Shows read time, views, and tags for Hashnode articles
- **Fallback Handling:** If Hashnode API fails, local articles still display

## API Endpoints Used

- **User Posts:** `user.posts` - Fetches articles by username
- **Publication Posts:** `publication.posts` - Fetches articles from a specific publication

## Customization

You can modify the number of articles fetched by changing the `limit` parameter in `/src/lib/articles.ts`:

```typescript
const hashnodeData = await getUserHashnodeArticles(username, 20) // Change 20 to your desired limit
```
