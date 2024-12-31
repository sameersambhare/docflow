"use client";
import { getClerkUsers } from '@/lib/actions/user.actions';
import React, { ReactNode } from 'react'
import { LiveblocksProvider, RoomProvider, ClientSideSuspense } from '@liveblocks/react/suspense'
import Loader from '@/components/Loader';
const provider = ({ children }: { children: ReactNode }) => {
    return (
        <LiveblocksProvider authEndpoint='/api/liveblocks-auth'
            resolveUsers={async ({ userIds }) => {
                const users = await getClerkUsers({ userIds });
                return users;
            }} >
            <ClientSideSuspense fallback={<Loader />}>
                {children}
            </ClientSideSuspense>
        </LiveblocksProvider>
    )
}

export default provider