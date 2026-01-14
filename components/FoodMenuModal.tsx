'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

interface MenuItem {
  name: string;
  description: string;
  image: string;
}

interface MenuSection {
  category: string;
  items: MenuItem[];
}

const MENU_DATA: MenuSection[] = [
  {
    category: 'Starters',
    items: [
      {
        name: 'Oysters Rockefeller',
        description: 'Fresh oysters with spinach, butter, and herbs',
        image:
          'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Burrata & Heirloom Tomatoes',
        description: 'Creamy burrata with seasonal tomatoes and basil oil',
        image:
          'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Foie Gras Torchon',
        description: 'Silky foie gras with brioche toast and fig jam',
        image:
          'https://images.pexels.com/photos/3624394/pexels-photo-3624394.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
    ],
  },
  {
    category: 'Main Dishes',
    items: [
      {
        name: 'Pan-Seared Branzino',
        description: 'Mediterranean sea bass with seasonal vegetables',
        image:
          'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Prime Ribeye',
        description: 'Grass-fed beef with truffle butter and roasted potatoes',
        image:
          'https://images.pexels.com/photos/5649776/pexels-photo-5649776.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Herb-Roasted Chicken',
        description: 'Free-range chicken with wild mushrooms and thyme',
        image:
          'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
    ],
  },
  {
    category: 'Drinks',
    items: [
      {
        name: 'Champagne Selection',
        description: 'Curated French champagne collection',
        image:
          'https://images.pexels.com/photos/3407817/pexels-photo-3407817.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Signature Cocktails',
        description: 'House-crafted cocktails with premium spirits',
        image:
          'https://images.pexels.com/photos/3407817/pexels-photo-3407817.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
    ],
  },
  {
    category: 'Desserts',
    items: [
      {
        name: 'Chocolate Soufflé',
        description: 'Warm dark chocolate soufflé with Grand Marnier',
        image:
          'https://images.pexels.com/photos/3722514/pexels-photo-3722514.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Crème Brûlée',
        description: 'Classic vanilla bean crème brûlée',
        image:
          'https://images.pexels.com/photos/5736744/pexels-photo-5736744.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Wedding Cake',
        description: 'Champagne-infused vanilla cake with fresh berries',
        image:
          'https://images.pexels.com/photos/3407817/pexels-photo-3407817.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
    ],
  },
];

interface FoodMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FoodMenuModal({ isOpen, onClose }: FoodMenuModalProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.4, type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <motion.div
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-emerald-200 p-6 flex items-center justify-between z-10">
                <h2 className="text-2xl sm:text-3xl font-serif text-emerald-800">Menu</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-emerald-50 rounded-full transition-colors flex-shrink-0"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-emerald-800" />
                </button>
              </div>

              <div className="overflow-y-auto flex-1 p-6 sm:p-8">
                {MENU_DATA.map((section, sectionIdx) => (
                  <motion.div
                    key={section.category}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + sectionIdx * 0.08, duration: 0.4 }}
                    className="mb-10 last:mb-0"
                  >
                    <h3 className="text-xl sm:text-2xl font-serif text-emerald-800 mb-6 pb-3 border-b-2 border-emerald-200">
                      {section.category}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {section.items.map((item, itemIdx) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 + (sectionIdx * 0.08) + (itemIdx * 0.04), duration: 0.3 }}
                          className="group cursor-pointer"
                        >
                          <div className="relative h-40 rounded-lg overflow-hidden mb-3 bg-emerald-50">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                              sizes="(max-width: 640px) 100vw, 50vw"
                            />
                          </div>
                          <h4 className="font-serif text-lg text-emerald-900 mb-1">
                            {item.name}
                          </h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
