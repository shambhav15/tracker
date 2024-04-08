// "use client";

// import * as React from "react";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "next-themes";
// import { Button, DropdownMenu } from "@radix-ui/themes";

// export function ModeToggle() {
//   const { setTheme } = useTheme();

//   return (
//     // <DropdownMenu>
//     //   <DropdownMenuTrigger asChild>
//     //     <Button variant="outline">
//     //       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//     //       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//     //       <span className="sr-only">Toggle theme</span>
//     //     </Button>
//     //   </DropdownMenuTrigger>
//     //   <DropdownMenuContent align="end">
//     //     <DropdownMenuItem onClick={() => setTheme("light")}>
//     //       Light
//     //     </DropdownMenuItem>
//     //     <DropdownMenuItem onClick={() => setTheme("dark")}>
//     //       Dark
//     //     </DropdownMenuItem>
//     //     <DropdownMenuItem onClick={() => setTheme("system")}>
//     //       System
//     //     </DropdownMenuItem>
//     //   </DropdownMenuContent>
//     // </DropdownMenu>
//     <DropdownMenu.Root>
//       <DropdownMenu.Trigger >
//         <Button variant="solid">
//           Options
//           <DropdownMenu.TriggerIcon />
//         </Button>
//       </DropdownMenu.Trigger>
//       <DropdownMenu.Content variant="solid">
//         <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
//         <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
//         <DropdownMenu.Separator />
//         <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

//         <DropdownMenu.Separator />
//         <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
//           Delete
//         </DropdownMenu.Item>
//       </DropdownMenu.Content>
//     </DropdownMenu.Root>
//   );
// }
