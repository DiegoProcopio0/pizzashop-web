import { Button } from './ui/button'
import { Building, ChevronDown, LogOut } from 'lucide-react'
import {
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getProfile } from '@/api/get-profile'
import { getManagerRestaurant } from '@/api/get-manager-restaurant'
import { Skeleton } from './ui/skeleton'
import { Dialog, DialogTrigger } from './ui/dialog'
import { StoreProfileDialog } from './store-profile-dialog'
import { signOut } from '@/api/sign-out'
import { useNavigate } from 'react-router-dom'

export function AccountMenu() {
  const navigate = useNavigate()

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfile,
    staleTime: Infinity,
  })

  const { data: managerRestaurant, isLoading: isLoadingManagerRestaurant } =
    useQuery({
      queryKey: ['manager-restaurant'],
      queryFn: getManagerRestaurant,
      staleTime: Infinity,
    })

  const { mutateAsync: signOutFn, isPending: isSigninOut } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      navigate('/sign-in', { replace: true })
    },
  })

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex select-none items-center gap-2"
          >
            {isLoadingManagerRestaurant ? (
              <Skeleton className="h-4 w-40" />
            ) : (
              managerRestaurant?.name
            )}
            <ChevronDown className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            {isLoadingProfile ? (
              <div className="space-y-1.5">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-3 w-24" />
              </div>
            ) : (
              <>
                <span>{profile?.name}</span>
                <span className="text-sm font-normal text-muted-foreground">
                  {profile?.email}
                </span>
              </>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger>
            <DropdownMenuItem>
              <Building className="mr-2 size-4" />
              <span>Perfil da lojas</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              asChild
              className="text-rose-500 dark:text-rose-400"
              disabled={isSigninOut}
            >
              <button className="w-full" onClick={() => signOutFn()}>
                <span>Sair</span>
                <LogOut className="mr-2 size-4" />
              </button>
            </DropdownMenuItem>
          </DialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>

      <StoreProfileDialog />
    </Dialog>
  )
}
