# Vercel Deployment Guide

## Fixed Issues

### 1. Routes-manifest.json Error
- ✅ Created `vercel.json` with proper Next.js configuration
- ✅ Ensured `next.config.ts` doesn't have static export enabled
- ✅ Added runtime configuration to API route

### 2. Email Network Error
- ✅ Added `runtime: 'nodejs'` and `dynamic: 'force-dynamic'` to API route
- ✅ Enhanced error handling and logging
- ✅ Added request timeout handling in frontend

## Environment Variables Setup

You need to configure these environment variables in your Vercel project:

### Required Variables:
1. **GMAIL_USER** - Your Gmail address (e.g., `s.cube.traders.info@gmail.com`)
2. **GMAIL_APP_PASSWORD** - Your Gmail app password (NOT your regular password)

### How to Set Environment Variables in Vercel:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add the following variables:

   ```
   GMAIL_USER=s.cube.traders.info@gmail.com
   GMAIL_APP_PASSWORD=your_16_character_app_password
   ```

4. **IMPORTANT**: Set these variables for:
   - ✅ Production
   - ✅ Preview
   - ✅ Development (if needed)

5. After adding variables, **redeploy** your project:
   - Go to **Deployments** tab
   - Click the three dots (•••) on the latest deployment
   - Select **Redeploy**

## How to Get Gmail App Password

If you haven't set up a Gmail App Password yet:

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** (if not already enabled)
4. Go to **App passwords** under 2-Step Verification
5. Select **Mail** as the app and **Other** as the device
6. Name it "S Cube Website" or similar
7. Google will generate a 16-character password
8. Copy this password and use it as `GMAIL_APP_PASSWORD` in Vercel

## Deployment Steps

1. **Commit and push your changes:**
   ```bash
   git add .
   git commit -m "Fix Vercel deployment and email configuration"
   git push
   ```

2. **Vercel will automatically deploy** (if connected to Git)
   - Or trigger a manual redeploy from Vercel dashboard

3. **Check deployment logs:**
   - Go to your Vercel dashboard
   - Click on the latest deployment
   - Check the **Build Logs** for any errors
   - Check **Function Logs** to see API route execution

## Testing

After deployment:

1. **Test the contact form** on your live site
2. **Check Vercel Function Logs** if emails fail:
   - Go to **Deployments** → Select deployment → **Functions**
   - Click on `api/contact`
   - View logs for error details

## Common Issues

### Issue: Still getting network error
**Solution:**
- Verify environment variables are set correctly in Vercel
- Ensure you redeploy after adding environment variables
- Check Function Logs for specific error messages

### Issue: Gmail authentication failed
**Solution:**
- Verify you're using an App Password (not regular password)
- Check that 2-Step Verification is enabled on your Google account
- Regenerate the App Password if needed

### Issue: Build fails
**Solution:**
- Check Build Logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify `next.config.ts` doesn't have `output: 'export'`

## Verify Configuration

Run these checks:

1. ✅ `vercel.json` exists
2. ✅ `next.config.ts` doesn't have `output: 'export'`
3. ✅ API route has `export const runtime = 'nodejs'`
4. ✅ Environment variables are set in Vercel
5. ✅ Project is redeployed after variable changes

## Support

If issues persist:
1. Check Vercel Function Logs
2. Look for specific error messages
3. Verify Gmail settings allow less secure app access (if using app passwords)

