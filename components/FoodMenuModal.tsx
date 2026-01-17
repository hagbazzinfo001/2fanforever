'use client';

import { useState } from 'react';
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

const GROOM_MENU: MenuSection[] = [
  {
    category: 'Starters',
    items: [
      {
        name: 'Tapioca',
        description: 'Fresh oysters with spinach, butter, and herbs',
        image:
          'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: ' Catfish Pepper Soup',
        description: 'Silky foie gras with brioche toast and fig jam',
        image:
          'https://res.cloudinary.com/dr0qnjp1s/image/upload/v1768662011/Nigerian_Catfish_peppersoup_warri_version_nawxwo.jpg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Garri Platter',
        description: 'Silky foie gras with brioche toast and fig jam',
        image:
          'https://res.cloudinary.com/dr0qnjp1s/image/upload/v1768661326/Screenshot_67_vkq8mp.png?auto=compress&cs=tinysrgb&w=400',
      },
    ],
  },
  {
    category: 'Main Dishes',
    items: [
      {
        name: 'Rice(Jollof & Fried)',
        description: 'Grass-fed beef with truffle butter and roasted potatoes',
        image:
          'https://res.cloudinary.com/dr0qnjp1s/image/upload/v1768662603/Nigerian-fried-rice-recipe-main-photo-3_prjooj.jpg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Amala & Ewedu',
        description: 'Mediterranean sea bass with seasonal vegetables',
        image:
          'https://res.cloudinary.com/dr0qnjp1s/image/upload/v1768662144/49136ge5942d7_z1q0v6.png?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Semovita & Egusi',
        description: 'Mediterranean sea bass with seasonal vegetables',
        image:
          'https://res.cloudinary.com/dr0qnjp1s/image/upload/v1768662409/NTy4GV6ooFRmaCXZ8UYgPhoud1kjiNX8QokLEZtbBKLuLWQ9yt7K3o4S8mhjyoJzT6phEnpBVEbBwJoHe8AsuaE9bdkxXx7bGDdZovuhx7NJQZ4puYdsVHtZ6DbE5yStehAFEgM1GiX6k3hHNnSAuoXiziqwPMLqoeuDjXYS_w3qaf0.webp?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Beans & Dodo',
        description: 'Mediterranean sea bass with seasonal vegetables',
        image:
          ' https://res.cloudinary.com/dr0qnjp1s/image/upload/v1768661640/images_1_p5afvd.jpg?auto=compress&cs=tinysrgb&w=400',
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
        name: 'Whiskey Collection',
        description: 'Premium aged whiskeys and spirits',
        image:
          'https://images.pexels.com/photos/3407817/pexels-photo-3407817.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
    ],
  },
  {
    category: 'Desserts',
    items: [
      {
        name: 'Garri & Sea Food',
        description: 'Warm dark chocolate soufflé with Grand Marnier',
        image:
          'https://res.cloudinary.com/dr0qnjp1s/image/upload/v1768661326/Screenshot_67_vkq8mp.png?auto=compress&cs=tinysrgb&w=400',
      },
      // {
      //   name: 'Crème Brûlée',
      //   description: 'Classic vanilla bean crème brûlée',
      //   image:
      //     'https://images.pexels.com/photos/5736744/pexels-photo-5736744.jpeg?auto=compress&cs=tinysrgb&w=400',
      // },
    ],
  },
];

const BRIDE_MENU: MenuSection[] = [
  {
    category: 'Starters',
    items: [
      {
        name: 'Burrata & Heirloom Tomatoes',
        description: 'Creamy burrata with seasonal tomatoes and basil oil',
        image:
          'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=400',
      },
      {
        name: 'Tuna Tartare',
        description: 'Sushi-grade tuna with avocado and crispy wonton',
        image:
          'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=400',
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
        name: 'Strawberry Cheesecake',
        description: 'Delicate cheesecake with fresh strawberries',
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

type TabType = 'groom' | 'bride';

export default function FoodMenuModal({ isOpen, onClose }: FoodMenuModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('groom');

  const currentMenu = activeTab === 'groom' ? GROOM_MENU : BRIDE_MENU;

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
              <div className="sticky top-0 bg-white border-b border-emerald-200 p-6 z-10">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl sm:text-3xl font-serif text-emerald-800">Menu</h2>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-emerald-50 rounded-full transition-colors flex-shrink-0"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-emerald-800" />
                  </button>
                </div>

                <div className="flex gap-2">
                  {(['groom', 'bride'] as const).map((tab) => (
                    <motion.button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 capitalize ${
                        activeTab === tab
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tab === 'groom' ? "Groom's Selection" : "Bride's Selection"}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="overflow-y-auto flex-1 p-6 sm:p-8">
                <AnimatePresence mode="wait">
                  {currentMenu.map((section, sectionIdx) => (
                    <motion.div
                      key={`${activeTab}-${section.category}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
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
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
