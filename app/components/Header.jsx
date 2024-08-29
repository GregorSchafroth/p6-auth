import Link from 'next/link';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';

function Header() {
  return (
    <header className='bg-blue-700 py-4 px-6 flex items-center justify-between mb-5'>
      <div className='flex items-center'>
        <Link href='/'>
          <h1 className='text-lg uppercase font-bold text-white'>Auth App</h1>
        </Link>
      </div>
      <SignedIn>
        <Link href='/dashboard'>
          <h1 className='text-gray-300 hover:text-white'>Dashboard</h1>
        </Link>
      </SignedIn>

      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <div>
          <Link href='sign-in' className='text-gray-300 hover:text-white mr-4'>
            Sign In
          </Link>
          <Link href='sign-up' className='text-gray-300 hover:text-white mr-4'>
            Sign Up
          </Link>
        </div>
      </SignedOut>
    </header>
  );
}

export default Header;

// export default async function Header() {
//   const user = await currentUser();

//   return (
//     <>
//       <header className='bg-blue-700 py-4 px-6 flex items-center justify-between mb-5'>
//         <div className='flex items-center'>
//           <Link href='/'>
//             <h1 className='text-lg uppercase font-bold text-white'>Auth App</h1>
//           </Link>
//         </div>
//         <div className='text-white flex items-center'>
//           {!user && (
//             <>
// <Link
//   href='sign-in'
//   className='text-gray-300 hover:text-white mr-4'
// >
//   Sign In
// </Link>
// <Link
//   href='sign-up'
//   className='text-gray-300 hover:text-white mr-4'
// >
//   Sign Up
// </Link>
//             </>
//           )}
//         </div>
//       </header>
//     </>
//   );
// }
