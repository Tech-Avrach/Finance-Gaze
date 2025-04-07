import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Partner = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-xl font-medium text-center mb-8">We are proud to work with these companies</h2>

      <div className="relative">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div className="w-24 md:w-44">
            <img src="https://seekvectorlogo.com/wp-content/uploads/2023/04/lightstream-vector-logo.png" className="w-full h-auto" alt="" />
          </div>
          <div className="w-24 md:w-44">
            <img src="https://logowik.com/content/uploads/images/lending-club.jpg" className="w-full h-auto" alt="" />
          </div>
          <div className="w-24 md:w-44">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSE7ETUymuR3hWGYfgLwxMg13QLFj2zma5SFBF5Hd_dcU6DpSeBV6quLOY7bCwuziMvPo&usqp=CAU" className="w-full h-auto" alt="" />
          </div>
          <div className="w-24 md:w-44">
            <img src="https://lsvp.com/wp-content/uploads/2023/03/Green-Logo-Pathing.png" className="w-full h-auto" alt="" />
          </div>
          <div className="w-24 md:w-44">
            <img src="https://cdn.worldvectorlogo.com/logos/chime-1.svg" className="w-full h-auto" alt="" />
          </div>
          <div className="w-24 md:w-44">
            <img src="https://logowik.com/content/uploads/images/cash-app8969.jpg" className="w-full h-auto" alt="" />
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white z-10 hidden md:flex"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white z-10 hidden md:flex"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex justify-center mt-8">
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5, 6, 7].map((dot) => (
            <span
              key={dot}
              className={`block h-2 w-2 rounded-full ${dot === 1 ? "bg-amber-500" : "bg-gray-300"}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Partner