import { Midjourney } from "midjourney";
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
 
export const runtime = 'edge'; // 'nodejs' is the default
 
export async function POST(request: NextRequest) {
    const body = await request.json();

    const client = new Midjourney({
        ServerId: body.SERVER_ID,
        ChannelId: body.CHANNEL_ID,
        SalaiToken: body.SALAI_TOKEN,
        Debug: true,
        Ws: true,
      });
      await client.Connect();
      const msg = await client.Info();
      client.Close();

    return NextResponse.json(
        {
            msg,
        },
        {
            status: 200,
        },
    );
}