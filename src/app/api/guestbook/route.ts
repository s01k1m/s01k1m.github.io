import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  // guestbook db에서 다 가져오기
  const data = await prisma.guestbook.findMany({ orderBy: [{ id: 'desc' }] }) // 최신순 정렬

  return NextResponse.json({ data })
}

export async function POST(request: Request) {
  try {
    const data = await request.json()
    if (!data.name) {
      // 이름 없다면 에러 처리하기
      return NextResponse.json(
        { error: '작성자 이름 없음' },
        {
          status: 400,
        },
      )
    }
    // 모든 것이 성공적이라면 db에 저장
    const createComment = await prisma.guestbook.create({
      data: {
        name: data.name,
        comment: data.comment,
      },
    })
    return NextResponse.json(
      { message: 'creating comment success' },
      {
        status: 200,
      },
    )
  } catch (err) {
    console.log(err)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      {
        status: 500,
      },
    )
  }
}
